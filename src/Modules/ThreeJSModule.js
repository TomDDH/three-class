import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class ThreeJSModule {
    constructor(data) {
        this.canvasContainer = data.canvasContainer
        this.appData = data.appData
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            0.1,
            50
        );
        this.camera.position.set(2, 1, 3)
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 0.95;

        this.canvas = this.renderer.domElement

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true


        window.addEventListener("resize", this.onWindowResize.bind(this));

        this.scene = new THREE.Scene();
        this.arScene = new THREE.Group()
        this.scene.add(this.arScene)
        this.init()
    }

    init() {
        this.canvasContainer.appendChild(this.renderer.domElement);

        const gridHelper = new THREE.GridHelper();
        const axesHelper = new THREE.AxesHelper(2);
        this.arScene.add(gridHelper)
        this.arScene.add(axesHelper)

        const geometry = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.arScene.add(cube);

        this.canvas.addEventListener("click", () => {

        })

        this.start();
    }

    onWindowResize() {
        this.camera.aspect = this.canvasContainer.clientWidth / this.canvasContainer.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
    }


    animate() {
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.controls.update()

    }
    stop() {
        cancelAnimationFrame(this.animationFrame)
    }
    async start() {
        this.animate();
    };

}

export default ThreeJSModule