import React from 'react';
import * as THREE from 'three';
// See gatsby-node.js for explanation of how this works
import 'three-examples/loaders/OBJLoader';
import logoOBJ from '../../../assets/logos/äpy_logo.obj';
import vs from './shaders/ground.vs';
import fs from './shaders/ground.fs';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100vw',
      height: '100vh',
      pageYOffset: 0,
      hasWebGL: null
    };
  }

  componentDidMount() {
    const hasWebGL = this.hasWebGL();
    if (hasWebGL) {
      // Setup
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;

      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x161719);

      // Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 30;
      camera.position.y = 0;
      camera.position.x = 0;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      // Load logo
      var loader = new THREE.OBJLoader();
      loader.load(
        // Resource URL, imported at top
        logoOBJ,
        // Called when resource is loaded
        object => {
          object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              child.geometry.computeFaceNormals();
              child.geometry.computeVertexNormals();
            }
          });
          // Rotate the logo upright and add it to the scene
          object.rotation.x = Math.PI / 2;
          scene.add(object);
        }
      );

      // Add light
      var light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 3, 4);
      scene.add(light);

      light = new THREE.AmbientLight(0x000000);
      light.position.set(-1, -1, -1);
      scene.add(light);

      // Add ground
      var geometry = new THREE.PlaneBufferGeometry(128, 128, 128, 128);
      var wireframe = new THREE.WireframeGeometry(geometry);
      // Use raw shaders to draw the mesh ground
      const shaders = new THREE.RawShaderMaterial({
        uniforms: {
          time: { value: 0 }
        },
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true
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
      this.mount.appendChild(renderer.domElement);

      // Set state variables and event listeners for window resize and scroll.
      // Scrolling down moves the camera y position to create a 3d effect.
      this.setState({ renderer, camera, scene, clock, ground });
      window.addEventListener('resize', this.onWindowResize);
      window.addEventListener('scroll', this.onWindowScroll);
      // Call start and start rendering stuff on the screen
      this.start();
    } else {
      // No WebGL available, display a normal div that has the text 'äpy'
      var DivNoWebGL = document.createElement('div');
      DivNoWebGL.style.cssText = 'margin: 0; font-size: 10em; font-family: "Libre Baskerville"; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;';
      this.mount.style.cssText = 'height: 50vh;';
      var p = document.createElement('p');
      p.style.cssText = 'margin: 0;';
      var äpyText = document.createTextNode('äpy');
      p.appendChild(äpyText);
      DivNoWebGL.appendChild(p);
      this.mount.appendChild(DivNoWebGL);
      this.setState({ DivNoWebGL });
    }
  }

  componentWillUnmount() {
    this.stop();
    const { renderer, hasWebGL, DivNoWebGL } = this.state;
    if (hasWebGL) {
      this.mount.removeChild(renderer.domElement);
    } else {
      this.mount.removeChild(DivNoWebGL);
    }
    window.removeEventListener('resize', this.onWindowResize, false);
    window.removeEventListener('scroll', this.onWindowScroll, false);
  }

  onWindowScroll = () => {
    this.setState({ pageYOffset: window.pageYOffset });
  };

  onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { camera, renderer } = this.state;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    this.setState({ width, height });
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
    const { renderer, camera, scene, clock, ground, pageYOffset } = this.state;

    const time = clock.getDelta();
    camera.position.y = -pageYOffset * 0.025; // Move camera down on scroll
    var z = new THREE.Vector3(0, 0, -1);
    camera.lookAt(z);

    ground.material.uniforms.time.value += time; // Update raw shader uniform time
    renderer.render(scene, camera);
  };

  render() {
    const { width, height } = this.state;
    return (
      <div
        style={{ margin: '0', width, height }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Logo;

Logo.propTypes = {};
