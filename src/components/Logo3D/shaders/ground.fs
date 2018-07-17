precision highp float;

uniform float time;

varying vec3 vPosition;

const float duration = 2.0;
const float delay = 1.2;


void main() {
  float now = clamp((time - delay) / duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPosition.xy / vec2(32.0))) * 0.9 * now;
  vec3 v = normalize(vPosition);
  vec3 rgb = vec3(0.3 + (v.x + v.y + v.x) / 40.0, 0.3, 0.3);
  //gl_FragColor = vec4(rgb, opacity);
  gl_FragColor = vec4(0, 0, 0, opacity);
}
