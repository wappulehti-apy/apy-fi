import React from 'react';
import * as THREE from 'three';
// See gatsby-node.js for explanation of how this works
import 'three-examples/loaders/OBJLoader';
import 'three-examples/controls/OrbitControls';
import styled from '@emotion/styled';
import logoOBJ from '../../../assets/logos/3d/logo3d-ajaton.obj';
import vs from './shaders/ground.vs';
import fs from './shaders/ground.fs';

const LogoContainer = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = { hasWebGL: null };
  }

  componentDidMount() {
    const hasWebGL = this.hasWebGL();
    if (hasWebGL) {
      // Setup
      const width = window.innerWidth;
      const height = this.canvasRef.current.clientHeight;

      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x161719);

      // Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 30;
      camera.position.y = 0;
      camera.position.x = 0;

      // Controls
      const controls = new THREE.OrbitControls(camera);
      controls.enableDamping = true;
      controls.dampingFactor = 0.04;
      controls.rotateSpeed = 0.07;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;
      controls.update();

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      // Load logo
      var loader = new THREE.OBJLoader();
      loader.load(
        // Resource URL, imported at top
        logoOBJ,
        // Called when resource is loaded
        object => {
          // Rotate the logo upright, shift it upwards, scale and add it to the scene
          object.rotation.x = Math.PI / 2;
          const s = 1.2;
          object.scale.set(s, s, s);
          object.translateZ(-1);
          scene.add(object);
        }
      );

      // Add light
      var light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-1, 0, 1);
      scene.add(light);

      // Add light
      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-1, 1, -1);
      scene.add(light);

      light = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(light);

      // Add ground
      var geometry = new THREE.PlaneBufferGeometry(128, 128, 128, 128);
      var wireframe = new THREE.WireframeGeometry(geometry);
      // Use raw shaders to draw the mesh ground
      const shaders = new THREE.RawShaderMaterial({
        uniforms: {
          time: { value: 0 },
        },
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true,
      });

      var ground = new THREE.LineSegments(wireframe, shaders);
      // Make the ground wireframe
      ground.material.opacity = 0.8;
      ground.material.transparent = true;
      // Rotate ground to right position
      ground.rotation.x = Math.PI / 2;
      ground.rotation.z = Math.PI / 2;
      ground.translateZ(10); // Move ground down a bit
      scene.add(ground);

      const clock = new THREE.Clock();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Add the renderer domElement (canvas) to this mounted component
      this.canvasRef.current.appendChild(renderer.domElement);

      // Set state variables and event listener for window resize.
      this.setState({ renderer, camera, scene, clock, ground, controls });
      window.addEventListener('resize', this.onWindowResize);
      // Call start and start rendering stuff on the screen
      this.start();
    } else {
      // No WebGL available, display a normal div that has the text 'äpy'
      var DivNoWebGL = document.createElement('div');
      DivNoWebGL.style.cssText =
        'margin: 0; \
        font-size: 10em; \
        font-family: "Libre Baskerville"; \
        color: white; \
        display: flex; \
        flex-direction: column; \
        justify-content: center; \
        align-items: center; \
        height: 100%;\
      ';
      this.canvasRef.current.style.cssText = 'height: 50vh;';
      var p = document.createElement('p');
      p.style.cssText = 'margin: 0;';
      var äpyText = document.createTextNode('äpy');
      p.appendChild(äpyText);
      DivNoWebGL.appendChild(p);
      this.canvasRef.current.appendChild(DivNoWebGL);
      this.setState({ DivNoWebGL });
    }
  }

  componentWillUnmount() {
    this.stop();
    const { renderer, hasWebGL, DivNoWebGL, controls } = this.state;
    if (controls) {
      controls.enabled = false;
    }
    if (hasWebGL) {
      this.canvasRef.current.removeChild(renderer.domElement);
    } else {
      this.canvasRef.current.removeChild(DivNoWebGL);
    }
    window.removeEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    const width = window.innerWidth;
    const height = this.canvasRef.current.clientHeight;
    const { camera, renderer } = this.state;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  hasWebGL = () => {
    try {
      var canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      hasWebGL
        ? this.setState({ hasWebGL: true })
        : this.setState({ hasWebGL: false });
      return hasWebGL;
    } catch (e) {
      this.setState({ hasWebGL: false });
      return false;
    }
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    const { renderer, camera, scene, clock, ground, controls } = this.state;

    const time = clock.getDelta();
    var z = new THREE.Vector3(0, 0, -1);
    camera.lookAt(z);
    controls.update();

    ground.material.uniforms.time.value += time; // Update raw shader uniform time
    renderer.render(scene, camera);
  };

  render() {
    return <LogoContainer innerRef={this.canvasRef} />;
  }
}

export default Logo;
