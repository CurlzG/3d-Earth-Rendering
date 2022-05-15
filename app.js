// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z =30;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth-1, window.innerHeight-1 );
renderer.setPixelRatio(window.devicePixelRatio);
// Append Renderer to DOM
document.body.appendChild( renderer.domElement );


// Create a Cube Mesh with basic material
var geometry = new THREE.SphereGeometry( 16,32,32,1);
const texture = new THREE.TextureLoader().load( '/assets/earth.jpeg' );
  const loader = new THREE.TextureLoader();

  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });




var sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0,-10,0)
// Add cube to Scene
scene.add( sphere );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
directionalLight.position.set(-20,10,1)
scene.add( directionalLight );
console.log(directionalLight.position)
// Render Loop
var render = function () {
  requestAnimationFrame( render );
  sphere.rotation.y += 0.005;
  sphere.rotation.x += 0.001;
  // Render the scene
  renderer.render(scene, camera);
};

render();