import React, { Fragment } from 'react';
import * as THREE from 'three';
import styled, { css } from 'react-emotion';
import SocialIcons from '../SocialIcons';
import { media, breakpoints } from '../../styles/main';
// See gatsby-node.js for explanation of how this works
import 'three-examples/loaders/OBJLoader';
import 'three-examples/controls/OrbitControls';
import logoOBJ from '../../../assets/logos/3d/logo3d-2019.obj';

const IndexInfo = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 70%;
  transform: translateX(-50%) translateY(-50%) translateZ(-50px);

  font-family: 'Montserrat Black';
  font-size: 1.9em;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  color: white;

  text-align: center;
  justify-content: center;

  a {
    font-size: 0.8em;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 0.9em;
  }

  ${media.phone(css`
    font-size: 0.9em;
    width: 90%;
  `)};
`;

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100vw',
      height: '100vh',
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
      controls.update();

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });

      // Load logo
      var loader = new THREE.OBJLoader();
      loader.load(
        // Resource URL, imported at top
        logoOBJ,
        // Called when resource is loaded
        object => {
          // Shift and scale the logo
          const width = window.innerWidth;
          // Make the logo smaller on tablet's and phones
          const s = width < breakpoints.desktop ? 1.3 : 2.3;
          object.scale.set(s, s, s);
          object.translateY(1.5);
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

      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Add the renderer domElement (canvas) to this mounted component
      this.mount.appendChild(renderer.domElement);

      // Set state variables and event listener for window resize.
      this.setState({ renderer, camera, scene, controls });
      window.addEventListener('resize', this.onWindowResize);
      // Call start and start rendering stuff on the screen
      this.start();
    } else {
      // No WebGL available, display a normal div that has the text 'äpy'
      var DivNoWebGL = document.createElement('div');
      DivNoWebGL.style.cssText =
        'margin: 0; \
        font-size: 10em; \
        font-family: "Lato Black"; \
        color: white; \
        display: flex; \
        flex-direction: column; \
        justify-content: center; \
        align-items: center; \
        height: 100%;\
      ';
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
    const { renderer, hasWebGL, DivNoWebGL, controls } = this.state;
    if (controls) {
      controls.enabled = false;
    }
    if (hasWebGL) {
      this.mount.removeChild(renderer.domElement);
    } else {
      this.mount.removeChild(DivNoWebGL);
    }
    window.removeEventListener('resize', this.onWindowResize, false);
    window.removeEventListener('scroll', this.onWindowScroll, false);
  }

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
    const { renderer, camera, scene, controls } = this.state;

    var z = new THREE.Vector3(0, 0, -1);
    camera.lookAt(z);
    controls.update();

    // Disable controls when we have scrolled down a bit.
    // The controls interfere with pointer events.
    controls.enabled = window.pageYOffset > 500 ? false : true;

    renderer.render(scene, camera);
  };

  render() {
    const { width, height } = this.state;
    return (
      <Fragment>
        <div
          style={{ margin: '0', width, height }}
          ref={mount => {
            this.mount = mount;
          }}
        />
        <IndexInfo>
          <p>Neljä kirjainta, joihon voit luottaa.</p>
          <p>
            Otaniemeläistä wappuhuumoria vuodesta 1948. Seuraavan kerran Äpy
            ilmestyy vuonna 2019.
          </p>
          <SocialIcons />
        </IndexInfo>
      </Fragment>
    );
  }
}

export default Logo;
