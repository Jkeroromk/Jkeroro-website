varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - vec2(0.5));

    // Soft edge instead of hard discard
    float alpha = smoothstep(0.5, 0.2, distanceToCenter);

    if (alpha <= 0.0)
        discard;

    gl_FragColor = vec4(vColor, alpha); // Apply alpha smoothly

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
