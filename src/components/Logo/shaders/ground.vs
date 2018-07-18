attribute vec3 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

varying vec3 vPosition;

void main() {
  float sin1 = sin((position.x + position.y) * 0.15 + time * 0.8);
  float sin2 = sin((position.x - position.y) * 0.22 + time * 0.85);
  float sin3 = sin((position.x + position.y) * -0.33 + time);
  vec3 updatePosition = vec3(position.x, position.y, position.z + sin1 + sin2 + sin3*0.1);
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(updatePosition, 1.0);
}
