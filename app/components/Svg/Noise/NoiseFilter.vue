<template>
  <svg class="hidden">
    <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.54" numOctaves="3" stitchTiles="noStitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
            <feFuncR type="linear" slope="0.25"/>
            <feFuncG type="linear" slope="0.25"/>
            <feFuncB type="linear" slope="0.25"/>
            <feFuncA type="linear" slope="1"/>
        </feComponentTransfer>
        <feComponentTransfer>
            <feFuncR type="linear" slope="3" intercept="-0.91"/>
            <feFuncG type="linear" slope="3" intercept="-0.91"/>
            <feFuncB type="linear" slope="3" intercept="-0.91"/>
        </feComponentTransfer>
    </filter>
    </svg>
</template>
