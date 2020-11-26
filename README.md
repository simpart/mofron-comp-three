# mofron-comp-three
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

threejs component for mofron


# Install
```
npm install mofron mofron-comp-three
```

# Sample
```html
<setting>
    <tag load="mofron-comp-three">Three</tag>
</setting>

<script run=init>
let ani_evt = (box) => {
    box.rotation.y += 0.01;
};
</script>

<script run=after>
let THREE = three.THREE();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, three.width() / three.height());
camera.position.set(0, 0, +1000);

const geometry = new THREE.BoxGeometry(400, 400, 400);
const material = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry, material);
scene.add(box);

three.scene(scene);
three.camera(camera);
three.animateEvent(ani_evt, box);
</script>

<Three name=three size=(800,600)></Three>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | renderer | object | threejs renderer |
| | width | number | px number |
| | height | number | px number |
| | autoAnimate | boolean | true: call animation loop autometally |
| | | | false: call animation loop by manually |
| | animateEvent | function | animate event function |
| | | mixed | animate event parameter |
| | animate | ||| | scene | object | threejs scene object |
| | camera | object | threejs camera object |
| | THREE | ||
