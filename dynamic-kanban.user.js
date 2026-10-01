// ==UserScript==
// @name         Dynamic Kanban Script
// @namespace    http://tampermonkey.net/
// @version      5.11.3
// @description  Filters, highlights and swimlanes for the Kanban boards
// @author       Burhan Kiran
// @match        https://projekte.sitegeist.de/*
// @updateURL    https://raw.githubusercontent.com/Devclaim/dynamic-kanban/main/dynamic-kanban.user.js
// @downloadURL  https://raw.githubusercontent.com/Devclaim/dynamic-kanban/main/dynamic-kanban.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function(){"use strict";(function(t){try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(t)),(document.head||document.documentElement).appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-700:oklch(55.4% .135 66.442);--color-green-500:oklch(72.3% .219 149.579);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-400:oklch(70.7% .165 254.624);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{#app{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}#app,#app *,#app :after,#app :before,#app ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}#app ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}#app hr{height:0;color:inherit;border-top-width:1px}#app abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}#app h1,#app h2,#app h3,#app h4,#app h5,#app h6{font-size:inherit;font-weight:inherit}#app a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}#app b,#app strong{font-weight:bolder}#app code,#app kbd,#app samp,#app pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}#app small{font-size:80%}#app sub,#app sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}#app sub{bottom:-.25em}#app sup{top:-.5em}#app table{text-indent:0;border-color:inherit;border-collapse:collapse}#app :-moz-focusring{outline:auto}#app progress{vertical-align:baseline}#app summary{display:list-item}#app ol,#app ul,#app menu{list-style:none}#app img,#app svg,#app video,#app canvas,#app audio,#app iframe,#app embed,#app object{vertical-align:middle;display:block}#app img,#app video{max-width:100%;height:auto}#app button,#app input,#app select,#app optgroup,#app textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}#app ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}#app :where(select:is([multiple],[size])) optgroup{font-weight:bolder}#app :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}#app ::file-selector-button{margin-inline-end:4px}#app ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){#app ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){#app ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}#app textarea{resize:vertical}#app ::-webkit-search-decoration{-webkit-appearance:none}#app ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}#app ::-webkit-datetime-edit{display:inline-flex}#app ::-webkit-datetime-edit-fields-wrapper{padding:0}#app ::-webkit-datetime-edit{padding-block:0}#app ::-webkit-datetime-edit-year-field{padding-block:0}#app ::-webkit-datetime-edit-month-field{padding-block:0}#app ::-webkit-datetime-edit-day-field{padding-block:0}#app ::-webkit-datetime-edit-hour-field{padding-block:0}#app ::-webkit-datetime-edit-minute-field{padding-block:0}#app ::-webkit-datetime-edit-second-field{padding-block:0}#app ::-webkit-datetime-edit-millisecond-field{padding-block:0}#app ::-webkit-datetime-edit-meridiem-field{padding-block:0}#app :-moz-ui-invalid{box-shadow:none}#app button,#app input:where([type=button],[type=reset],[type=submit]){appearance:button}#app ::file-selector-button{appearance:button}#app ::-webkit-inner-spin-button{height:auto}#app ::-webkit-outer-spin-button{height:auto}#app [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-18{bottom:calc(var(--spacing)*18)}.left-0{left:calc(var(--spacing)*0)}.left-2{left:calc(var(--spacing)*2)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.\\!h-full{height:100%!important}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-\\[80\\%\\]{height:80%}.h-\\[calc\\(100vh-8rem\\)\\]{height:calc(100vh - 8rem)}.h-fit{height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.\\!max-h-full{max-height:100%!important}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-screen{min-height:100vh}.\\!w-full{width:100%!important}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-6{width:calc(var(--spacing)*6)}.w-10{width:calc(var(--spacing)*10)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-80{width:calc(var(--spacing)*80)}.w-\\[750px\\]{width:750px}.w-fit{width:fit-content}.w-full{width:100%}.w-screen{width:100vw}.max-w-\\[90\\%\\]{max-width:90%}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.border-separate{border-collapse:separate}.\\[border-spacing\\:0\\.5rem\\]{border-spacing:.5rem}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-move{cursor:move}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.\\!resize-none{resize:none!important}.resize-none{resize:none}.list-decimal{list-style-type:decimal}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.\\!rounded{border-radius:.25rem!important}.\\!rounded-full{border-radius:3.40282e38px!important}.\\!rounded-xl{border-radius:var(--radius-xl)!important}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.\\!border-0{border-style:var(--tw-border-style)!important;border-width:0!important}.\\!border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.\\!border-dashed{--tw-border-style:dashed!important;border-style:dashed!important}.\\!border-none{--tw-border-style:none!important;border-style:none!important}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.\\!border-gray-700{border-color:var(--color-gray-700)!important}.border-\\[var\\(--border-color\\)\\]{border-color:var(--border-color)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-700{border-color:var(--color-gray-700)}.border-gray-800{border-color:var(--color-gray-800)}.border-yellow-700{border-color:var(--color-yellow-700)}.\\!bg-gray-700{background-color:var(--color-gray-700)!important}.\\!bg-gray-900{background-color:var(--color-gray-900)!important}.\\!bg-green-800{background-color:var(--color-green-800)!important}.\\!bg-red-900{background-color:var(--color-red-900)!important}.\\!bg-transparent{background-color:#0000!important}.bg-blue-400{background-color:var(--color-blue-400)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-gray-600{background-color:var(--color-gray-600)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-700\\!{background-color:var(--color-gray-700)!important}.bg-gray-700\\/30{background-color:#3641534d}@supports (color:color-mix(in lab,red,red)){.bg-gray-700\\/30{background-color:color-mix(in oklab,var(--color-gray-700)30%,transparent)}}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-800{background-color:var(--color-green-800)}.bg-purple-700{background-color:var(--color-purple-700)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-900{background-color:var(--color-red-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.fill-current{fill:currentColor}.\\!p-0{padding:calc(var(--spacing)*0)!important}.\\!p-2{padding:calc(var(--spacing)*2)!important}.\\!p-3{padding:calc(var(--spacing)*3)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.\\!px-3{padding-inline:calc(var(--spacing)*3)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5\\!{padding-inline:calc(var(--spacing)*2.5)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.\\!py-1{padding-block:calc(var(--spacing)*1)!important}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-2{padding-top:calc(var(--spacing)*2)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.\\!text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.\\!text-white{color:var(--color-white)!important}.\\!text-yellow-300{color:var(--color-yellow-300)!important}.text-black{color:var(--color-black)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-400{color:var(--color-red-400)}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-400{color:var(--color-yellow-400)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.\\!opacity-20{opacity:.2!important}.opacity-20{opacity:.2}.\\!shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.\\!shadow-none{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[--border-color\\:\\#703ba1\\]{--border-color:#703ba1}.\\[--prio-color\\:\\#b31814\\]{--prio-color:#b31814}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.group-hover\\:-rotate-45:is(:where(.group):hover *){rotate:-45deg}}.peer-focus\\:hidden:is(:where(.peer):focus~*){display:none}@media (hover:hover){.hover\\:\\!bg-gray-600:hover{background-color:var(--color-gray-600)!important}.hover\\:\\!bg-gray-800:hover{background-color:var(--color-gray-800)!important}.hover\\:\\!bg-green-700:hover{background-color:var(--color-green-700)!important}.hover\\:\\!bg-red-800:hover{background-color:var(--color-red-800)!important}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-green-800\\!:hover{background-color:var(--color-green-800)!important}.hover\\:text-white:hover{color:var(--color-white)}}.focus\\:\\!border-gray-500:focus{border-color:var(--color-gray-500)!important}.focus\\:\\!bg-gray-600:focus{background-color:var(--color-gray-600)!important}.focus\\:bg-gray-700:focus{background-color:var(--color-gray-700)}.focus\\:bg-gray-800:focus{background-color:var(--color-gray-800)}.focus\\:\\!outline-none:focus{--tw-outline-style:none!important;outline-style:none!important}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}}ul{padding-left:1.5rem;list-style:outside}ol{padding-left:1.5rem;list-style:decimal}textarea,pre{scrollbar-width:thin;scrollbar-color:#374151 #111827}textarea::-webkit-scrollbar{height:calc(var(--spacing)*2);width:calc(var(--spacing)*2)}.custom-slider::-webkit-scrollbar{height:calc(var(--spacing)*2);width:calc(var(--spacing)*2)}textarea::-webkit-scrollbar-track{border-radius:var(--radius-md);background-color:var(--color-gray-900)}.custom-slider::-webkit-scrollbar-track{border-radius:var(--radius-md);background-color:var(--color-gray-900)}textarea::-webkit-scrollbar-thumb{border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-gray-900);background-color:var(--color-gray-700)}.custom-slider::-webkit-scrollbar-thumb{border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-gray-900);background-color:var(--color-gray-700)}textarea::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-600)}.custom-slider::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-600)}.custom-color-swatch::-webkit-color-swatch{border:none;border-radius:15px}.custom-color-swatch::-moz-color-swatch{border:none;border-radius:15px}.highlight-background{background-color:var(--border-color)!important}@supports (color:color-mix(in lab,red,red)){.highlight-background{background-color:color-mix(in srgb,var(--border-color)20%,white 75%)!important}}.highlight-badge{position:relative}.highlight-badge:after{--f:.5em;--r:.8em;--c:var(--border-color);content:"IT";top:15px;right:calc(-1*var(--f));color:#fff;background:var(--c);border-bottom:var(--f)solid #00000054;border-left:var(--r)solid transparent;clip-path:polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f))100%,calc(100% - var(--f))calc(100% - var(--f)),0 calc(100% - var(--f)),var(--r)calc(50% - var(--f)/2));pointer-events:none;white-space:nowrap;z-index:2;padding-inline:.7em;font-size:16px;font-weight:700;line-height:2;position:absolute}.prio-badge{position:relative}.prio-badge:before{--f:.5em;--r:.8em;--c:var(--prio-color);content:"H";top:15px;left:calc(-1*var(--f));color:#fff;background:var(--c);border-bottom:var(--f)solid #00000054;border-right:var(--r)solid transparent;clip-path:polygon(0 0,0 calc(100% - var(--f)),var(--f)100%,var(--f)calc(100% - var(--f)),100% calc(100% - var(--f)),calc(100% - var(--r))calc(50% - var(--f)/2),100% 0);pointer-events:none;white-space:nowrap;z-index:2;padding-inline:.7em;font-size:16px;font-weight:700;line-height:2;position:absolute}.sortable-chosen{filter:brightness(80%);opacity:.5!important}.sortable-ghost{opacity:.1!important}.collapse{visibility:inherit!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}')})();
(function(){"use strict";function hn(e=location.pathname){return/\/agile\/board/.test(e)||/^\/issues\/\d+/.test(e)}function Er(e){if(!e||e==="classic")return!1;const t=document.documentElement,r=document.getElementById("dk-clean-theme");if(r)return document.head&&r!==document.head.lastElementChild&&document.head.appendChild(r),!0;t.classList.add("dk-clean");const n=a=>{t.classList.toggle("dk-dark",a),t.classList.toggle("dk-light",!a)};if(e==="clean-auto"){const a=window.matchMedia("(prefers-color-scheme: dark)");n(a.matches),a.addEventListener("change",i=>n(i.matches))}else n(e==="clean-dark");const o=document.createElement("style");return o.id="dk-clean-theme",o.textContent=Go,(document.head||t).appendChild(o),!0}const Go=`
			html.dk-light {
				--dk-bg: #f3f4f6; --dk-bar: #ffffff; --dk-surface: #ffffff; --dk-border: #e2e4e9;
				--dk-border-strong: #c9cdd5; --dk-text: #1d2433; --dk-muted: #6b7280;
				--dk-chip: #f1f2f5; --dk-link: #185fa5; --dk-shadow: rgba(29, 36, 51, 0.12);
				--dk-prio-bg: #fcebeb; --dk-prio-text: #a32d2d;
			}
			html.dk-dark {
				--dk-bg: #0b0e13; --dk-bar: #141821; --dk-surface: #1b2029; --dk-border: #2b313c;
				--dk-border-strong: #3a4250; --dk-text: #e6e8ec; --dk-muted: #8b93a1;
				--dk-chip: #232936; --dk-link: #85b7eb; --dk-shadow: rgba(0, 0, 0, 0.45);
				--dk-prio-bg: #4a1f22; --dk-prio-text: #f7c1c1;
				color-scheme: dark;
			}

			/* Page */
			html.dk-clean body, html.dk-clean #main, html.dk-clean #content {
				background: var(--dk-bg) !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #content h2 { color: var(--dk-text) !important; }
			html.dk-clean #content input[type="text"], html.dk-clean #content input[type="search"],
			html.dk-clean #content select, html.dk-clean #content textarea {
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				box-shadow: none !important;
			}
			html.dk-clean #content fieldset { border-color: var(--dk-border) !important; }
			html.dk-clean #content fieldset legend, html.dk-clean #content fieldset legend a { color: var(--dk-muted) !important; }
			html.dk-clean #content p.buttons a {
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				opacity: 1 !important;
			}

			/* Query form: collapsed Filter / Optionen and the buttons in one row */
			html.dk-clean #content fieldset.collapsible.collapsed {
				display: inline-block;
				margin: 0 6px 10px 0;
				padding: 0;
				border: 0 !important;
				vertical-align: middle;
			}
			html.dk-clean #content fieldset.collapsible { border-width: 1px 0 0 !important; }
			html.dk-clean #content fieldset.collapsible.collapsed { width: auto !important; }
			html.dk-clean #content fieldset.collapsible.collapsed > div { display: none !important; }
			html.dk-clean #content #query_form_content { display: inline; }

			/* Header rows: title + topic search, toolbar, filter row */
			html.dk-clean #content > h2 {
				display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
				margin: 0 0 12px;
			}
			html.dk-clean #content > .contextual {
				float: none !important;
				display: flex;
				margin: 0 0 12px !important;
				padding: 0 !important;
			}
			html.dk-clean #content fieldset.collapsible > legend {
				display: inline-flex; align-items: center; gap: 4px;
				background: var(--dk-surface);
				border: 1px solid var(--dk-border);
				border-radius: 7px;
				padding: 4px 10px;
				font-size: 12px;
				cursor: pointer;
			}
			html.dk-clean #content fieldset.collapsible > legend,
			html.dk-clean #content fieldset.collapsible > legend a { color: var(--dk-text) !important; text-decoration: none; }
			html.dk-clean #content p.buttons {
				display: inline-flex; gap: 6px; vertical-align: middle;
				margin: 0 0 10px !important; padding: 0 !important;
			}
			html.dk-clean #content p.buttons a { padding: 4px 10px !important; font-size: 12px; }
			/* The theme shifts FontAwesome icons 20px to the left (it expects
			   a left padding) — put them back inside the buttons. */
			html.dk-clean #content fieldset.collapsible > legend.icon::before,
			html.dk-clean #content p.buttons a.icon::before {
				position: static !important;
				margin: 0 6px 0 0 !important;
				font-size: 11px;
				color: var(--dk-muted);
			}
			html.dk-clean #content fieldset.collapsible > legend,
			html.dk-clean #content p.buttons a,
			html.dk-clean .contextual button,
			html.dk-clean .createNewTicket {
				transition: background-color .15s ease, border-color .15s ease, color .15s ease;
			}
			html.dk-clean #content fieldset.collapsible > legend:hover,
			html.dk-clean #content p.buttons a:hover,
			html.dk-clean #content p.buttons a:focus {
				border-color: var(--dk-border-strong) !important;
				background: var(--dk-chip) !important;
				box-shadow: none !important;
				outline: none !important;
			}

			/* Redmine header */
			html.dk-clean #top-menu {
				background: var(--dk-bg) !important;
				color: var(--dk-muted) !important;
				border-bottom: 1px solid var(--dk-border);
			}
			html.dk-clean #top-menu a { color: var(--dk-muted) !important; }
			html.dk-clean #top-menu a:hover { color: var(--dk-text) !important; }
			html.dk-clean #header {
				background: var(--dk-bar) !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #header h1, html.dk-clean #header h1 a { color: var(--dk-text) !important; }
			html.dk-clean #header #quick-search,
			html.dk-clean #header #quick-search a { color: var(--dk-muted) !important; }
			html.dk-clean #header #quick-search input#q,
			html.dk-clean #header #project-jump .drdn-trigger {
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				box-shadow: none !important;
			}
			html.dk-clean #header #project-jump .drdn-content {
				background: var(--dk-bar) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
			}
			html.dk-clean #main-menu {
				background: var(--dk-bar) !important;
				border-bottom: 1px solid var(--dk-border) !important;
			}
			html.dk-clean #main-menu li a {
				background: transparent !important;
				color: var(--dk-muted) !important;
				box-shadow: none !important;
			}
			html.dk-clean #main-menu li a:hover, html.dk-clean #main-menu li a:focus {
				color: var(--dk-text) !important;
				background: var(--dk-chip) !important;
			}
			html.dk-clean #main-menu li a.selected {
				color: var(--dk-text) !important;
				box-shadow: inset 0 -2px 0 var(--dk-text) !important;
			}
			html.dk-clean #main-menu li a { border-radius: 6px 6px 0 0; }

			/* Menu scroll arrows (shown by Redmine when the menu overflows) */
			html.dk-clean #main-menu .tabs-buttons {
				background: var(--dk-bar) !important;
				border-left: 1px solid var(--dk-border) !important;
				padding: 0 4px !important;
			}
			html.dk-clean #main-menu .tabs-buttons button {
				position: relative;
				width: 26px !important; height: 26px !important;
				margin: 0 1px !important;
				background: transparent !important;
				border: 1px solid transparent !important;
				border-radius: 6px !important;
				box-shadow: none !important;
				cursor: pointer;
			}
			html.dk-clean #main-menu .tabs-buttons button:hover {
				background: var(--dk-chip) !important;
				border-color: var(--dk-border) !important;
			}
			html.dk-clean #main-menu .tabs-buttons button::before,
			html.dk-clean a.sidebar-toggler::before {
				content: '';
				position: absolute; inset: 0; margin: auto;
				width: 14px; height: 14px;
				background: var(--dk-muted);
				-webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 6l-6 6 6 6'/%3E%3C/svg%3E") center / contain no-repeat;
				mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 6l-6 6 6 6'/%3E%3C/svg%3E") center / contain no-repeat;
			}
			html.dk-clean #main-menu .tabs-buttons button.tab-right::before { transform: scaleX(-1); }
			html.dk-clean #main-menu .tabs-buttons button:hover::before,
			html.dk-clean a.sidebar-toggler:hover::before { background: var(--dk-text); }

			/* Sidebar toggle */
			html.dk-clean a.sidebar-toggler {
				background-color: var(--dk-surface) !important;
				background-image: none !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				box-shadow: none !important;
			}
			html.dk-clean a.sidebar-toggler::before {
				-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='16' rx='3'/%3E%3Cpath d='M15 4v16'/%3E%3C/svg%3E");
				mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='16' rx='3'/%3E%3Cpath d='M15 4v16'/%3E%3C/svg%3E");
			}

			/* Project dropdown */
			html.dk-clean #header #project-jump .drdn-content {
				background: var(--dk-bar) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 10px !important;
				box-shadow: 0 16px 32px var(--dk-shadow) !important;
				padding: 6px !important;
				overflow: hidden;
			}
			html.dk-clean #project-jump .quick-search { padding: 0 0 6px !important; background: transparent !important; }
			html.dk-clean #project-jump .quick-search input {
				width: 100% !important; box-sizing: border-box;
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				box-shadow: none !important;
				padding: 6px 10px !important;
				background-image: none !important;
			}
			html.dk-clean #project-jump .drdn-items {
				background: transparent !important;
				border: 0 !important;
				padding: 0 !important;
			}
			html.dk-clean #project-jump .drdn-items strong {
				display: block;
				color: var(--dk-muted) !important;
				font-size: 11px; font-weight: 500;
				padding: 8px 8px 4px !important;
				border: 0 !important; background: transparent !important;
			}
			html.dk-clean #project-jump .drdn-items a {
				color: var(--dk-text) !important;
				opacity: 1 !important;
				background: transparent !important;
				border: 0 !important;
				border-radius: 6px;
				padding: 5px 8px !important;
			}
			html.dk-clean #project-jump .drdn-items a:hover,
			html.dk-clean #project-jump .drdn-items a.selected {
				background: var(--dk-chip) !important;
			}
			html.dk-clean #project-jump .drdn-items a.selected { font-weight: 500; }
			html.dk-clean #project-jump .drdn-items a::before { filter: none !important; }

			/* Sidebar */
			html.dk-dark #sidebar { border-left: 1px solid var(--dk-border); }
			html.dk-dark #sidebar a.selected {
				background: var(--dk-chip) !important;
				color: var(--dk-text) !important;
				border-color: var(--dk-border) !important;
			}

			/* Toolbar */
			html.dk-clean .contextual {
				align-items: center;
				flex-wrap: wrap;
				gap: 6px !important;
				color: var(--dk-muted) !important;
			}
			html.dk-clean #ticket-info {
				font-variant-numeric: tabular-nums;
				font-weight: 400;
				background: var(--dk-chip) !important;
				color: var(--dk-muted) !important;
				border: 0 !important;
				box-shadow: none !important;
				border-radius: 999px !important;
				padding: 2px 10px !important;
				font-size: 12px;
			}
			html.dk-clean .contextual button[name="board-filter"],
			html.dk-clean .contextual button[name="reset-button"],
			html.dk-clean .contextual select,
			html.dk-clean .contextual input.live_search_field {
				font-family: inherit !important;
				font-size: 12px !important;
				height: 30px !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				box-shadow: none !important;
			}
			html.dk-clean .contextual input.live_search_field {
				box-sizing: border-box !important;
				padding: 0 26px 0 10px !important;
				width: 150px !important;
			}
			html.dk-light .contextual button[name="board-filter"]:not([style*="--border-color"]),
			html.dk-light .contextual button[name="reset-button"],
			html.dk-light .contextual select,
			html.dk-light .contextual input.live_search_field {
				border-color: var(--dk-border-strong) !important;
			}
			/* Colored filters: text and border in their own color */
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"] {
				background: color-mix(in srgb, var(--border-color) 10%, var(--dk-surface)) !important;
				border-color: color-mix(in srgb, var(--border-color) 65%, var(--dk-surface)) !important;
				color: color-mix(in srgb, var(--border-color) 78%, var(--dk-text)) !important;
				font-weight: 500 !important;
			}
			html.dk-clean .contextual button[name="board-filter"] {
				min-width: 40px;
				justify-content: center;
				text-align: center;
			}
			html.dk-clean .contextual button[name="board-filter"]:hover,
			html.dk-clean .contextual button[name="reset-button"]:hover {
				border-color: var(--dk-border-strong) !important;
				background: var(--dk-chip) !important;
			}
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"]:hover {
				background: color-mix(in srgb, var(--border-color) 20%, var(--dk-surface)) !important;
				border-color: var(--border-color) !important;
			}
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"].active {
				background: var(--border-color) !important;
				border-color: var(--border-color) !important;
				color: #fff !important;
			}
			html.dk-clean .contextual button[name="board-filter"]:not([style*="--border-color"]).active {
				background: var(--dk-text) !important;
				color: var(--dk-bg) !important;
			}
			html.dk-clean .contextual .tag-filter-menu-panel {
				background: var(--dk-bar) !important;
				border: 1px solid var(--dk-border) !important;
				box-shadow: 0 12px 28px var(--dk-shadow) !important;
			}
			html.dk-clean .contextual .clear-button { color: var(--dk-muted) !important; }
			html.dk-clean .contextual .clear-button:hover { color: var(--dk-text) !important; }

			/* Opacity slider */
			html.dk-clean .opacity-slider-container {
				display: inline-flex !important;
				align-items: center;
				gap: 7px;
				height: 30px;
				box-sizing: border-box;
				padding: 0 10px;
				background: var(--dk-surface);
				border: 1px solid var(--dk-border);
				border-radius: 7px;
				color: var(--dk-muted);
			}
			html.dk-clean .opacity-slider-container label { display: inline-flex; margin: 0; color: var(--dk-muted) !important; }
			html.dk-clean .opacity-slider-container .dk-opacity-value {
				font-size: 11px; min-width: 30px; text-align: right;
				color: var(--dk-text); font-variant-numeric: tabular-nums;
			}
			html.dk-clean input.opacity-slider {
				-webkit-appearance: none; appearance: none;
				width: 90px; height: 4px; margin: 0; border-radius: 2px;
				background: linear-gradient(to right, var(--dk-text) var(--pct, 50%), var(--dk-border) var(--pct, 50%));
				outline: none;
			}
			html.dk-clean input.opacity-slider::-webkit-slider-thumb {
				-webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%;
				background: var(--dk-text); border: 2px solid var(--dk-surface); cursor: pointer;
			}
			html.dk-clean input.opacity-slider::-moz-range-thumb {
				width: 12px; height: 12px; border-radius: 50%;
				background: var(--dk-text); border: 2px solid var(--dk-surface); cursor: pointer;
			}
			html.dk-clean input.opacity-slider::-moz-range-track { background: transparent; }

			/* Board grid + sticky column header */
			html.dk-clean .agile-board table.issues-board,
			html.dk-clean .agile-board table.issues-board th,
			html.dk-clean .agile-board table.issues-board td,
			html.dk-clean #content .agile-board table.issues-board tbody tr,
			html.dk-clean #content .agile-board .issue-status-col {
				background: transparent !important;
				background-color: transparent !important;
				border-color: var(--dk-border) !important;
			}
			html.dk-clean .agile-board table.issues-board {
				border: 0 !important;
				border-collapse: separate !important;
				border-spacing: 0 !important;
				table-layout: fixed;
			}
			html.dk-clean #content .agile-board table.issues-board thead th {
				background: var(--dk-bar) !important;
				border: 0 !important;
				border-top: 1px solid var(--dk-border) !important;
				border-bottom: 1px solid var(--dk-border) !important;
				box-shadow: 0 12px 20px -14px var(--dk-shadow);
				color: var(--dk-muted) !important;
				font-size: 12px !important;
				font-weight: 500 !important;
				text-align: left !important;
				padding: 10px 11px !important;
			}
			/* The board plugin shows its own fixed copy of the header while
			   scrolling (table.sticky) — style it as one solid bar. */
			html.dk-clean .agile-board table.issues-board.sticky {
				background: var(--dk-bar) !important;
				border-bottom: 1px solid var(--dk-border) !important;
				box-shadow: 0 10px 24px -8px var(--dk-shadow) !important;
			}
			html.dk-clean #content .agile-board table.issues-board.sticky thead th {
				border-top: 0 !important;
				border-bottom: 0 !important;
				box-shadow: none !important;
			}
			html.dk-clean .agile-board td.issue-status-col {
				border: 0 !important;
				padding: 2px 5px !important;
				vertical-align: top;
			}

			/* Swimlane header: a tab, click anywhere to collapse/expand */
			html.dk-clean #content .agile-board tr.group:not(.swimlane) td { padding: 0 !important; }
			html.dk-clean #content .agile-board tr.group.swimlane td {
				background: transparent !important;
				border: 0 !important;
				padding: 14px 5px 8px !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean .dk-lane-head {
				display: flex; align-items: center; gap: 8px;
				background: color-mix(in srgb, var(--dk-surface) 55%, transparent);
				border: 1px solid color-mix(in srgb, var(--dk-border) 70%, transparent);
				border-radius: 10px;
				padding: 7px 12px;
				cursor: pointer;
				user-select: none;
				transition: background-color .15s ease, border-color .15s ease;
			}
			html.dk-clean .dk-lane-head:hover {
				border-color: var(--dk-border);
				background: var(--dk-surface);
			}
			html.dk-clean .dk-lane-head .expander { display: none !important; }
			html.dk-clean .dk-chevron {
				display: inline-flex; color: var(--dk-muted);
				transition: transform .15s ease;
			}
			html.dk-clean .dk-chevron svg { width: 14px; height: 14px; }
			html.dk-clean tr.group:not(.open) .dk-chevron { transform: rotate(-90deg); }
			html.dk-clean .dk-lane-head a:not(.createNewTicket):not(.toggle-all) {
				color: var(--dk-text) !important;
				font-size: 13px; font-weight: 500;
			}
			html.dk-clean .dk-lane-head .count {
				background: transparent !important; border: 0 !important;
				color: var(--dk-muted) !important; font-size: 11px; font-weight: 400; padding: 0;
				text-transform: none !important; letter-spacing: 0 !important;
			}
			html.dk-clean .dk-lane-head .count::after { content: ' Tickets'; }
			html.dk-clean .dk-lane-spacer { flex: 1; }
			/* Replaced by the toolbar button */
			html.dk-clean .dk-lane-head .toggle-all { display: none !important; }
			html.dk-clean .agile-board a { text-decoration: none !important; }
			html.dk-clean .createNewTicket {
				display: inline-flex; align-items: center; height: auto;
				background: var(--dk-surface) !important;
				color: var(--dk-muted) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 7px !important;
				padding: 2px 9px !important;
				font-size: 11px; margin-left: 0;
			}
			html.dk-clean .createNewTicket::before { content: '+'; margin-right: 4px; }
			html.dk-clean .createNewTicket:hover,
			html.dk-clean .createNewTicket:focus {
				border-color: var(--dk-border-strong) !important;
				color: var(--dk-text) !important;
				box-shadow: none !important;
				outline: none !important;
			}
			html.dk-clean .createNewTicketMenuPanel {
				background: var(--dk-bar) !important;
				border: 1px solid var(--dk-border) !important;
				box-shadow: 0 12px 28px var(--dk-shadow) !important;
			}
			html.dk-clean .createNewTicketMenuPanel a {
				background: transparent !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean .createNewTicketMenuPanel a:hover { background: var(--dk-chip) !important; }

			/* Cards */
			html.dk-clean .agile-board .issue-card {
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 10px !important;
				box-shadow: none !important;
				padding: 10px 12px 10px 14px !important;
				margin: 0 0 8px !important;
				font-size: 12px !important;
				line-height: 1.4;
				position: relative;
				overflow: hidden;
				cursor: pointer;
				transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
			}
			html.dk-clean .agile-board .issue-card.highlight-border[data-department] {
				border-color: color-mix(in srgb, var(--border-color) 28%, var(--dk-surface)) !important;
			}
			html.dk-clean .agile-board .issue-card.highlight-background[data-department] {
				background: color-mix(in srgb, var(--border-color) 6%, var(--dk-surface)) !important;
			}
			html.dk-clean .agile-board .issue-card:hover {
				transform: translateY(-1px);
				border-color: var(--dk-border-strong) !important;
				box-shadow: 0 6px 14px var(--dk-shadow) !important;
			}
			html.dk-clean .agile-board .issue-card[data-department]:hover {
				border-color: color-mix(in srgb, var(--border-color) 55%, var(--dk-surface)) !important;
			}
			html.dk-clean .agile-board .issue-card.ui-sortable-helper { transform: none; }

			/* Department + priority pills (were ribbons) */
			html.dk-clean .agile-board .issue-card.highlight-badge::after,
			html.dk-clean .agile-board .issue-card.prio-badge::before {
				top: 10px !important;
				left: auto !important;
				right: 12px !important;
				clip-path: none !important;
				border: 0 !important;
				border-radius: 999px;
				padding: 0 7px !important;
				line-height: 18px !important;
				font-size: 11px !important;
				font-weight: 500 !important;
			}
			html.dk-clean .agile-board .issue-card.highlight-badge::after {
				background: color-mix(in srgb, var(--border-color) 18%, var(--dk-surface)) !important;
				color: color-mix(in srgb, var(--border-color) 65%, var(--dk-text)) !important;
			}
			html.dk-clean .agile-board .issue-card.prio-badge::before {
				content: 'Hoch' !important;
				background: var(--dk-prio-bg) !important;
				color: var(--dk-prio-text) !important;
			}
			html.dk-clean .agile-board .issue-card.prio-badge.highlight-badge[data-department]::before {
				right: 56px !important;
			}

			/* Compact card: only the block built by buildCompactCard() is
			   shown, the original fields stay in the DOM for the filters. */
			html.dk-clean .agile-board .issue-card.dk-has-compact > *:not(.dk-compact) {
				display: none !important;
			}
			html.dk-clean .dk-compact { display: flex; flex-direction: column; gap: 6px; }
			html.dk-clean .dk-head {
				display: flex; gap: 6px; align-items: baseline;
				font-size: 11px; color: var(--dk-muted);
				padding-right: 44px; min-width: 0; line-height: 18px;
			}
			html.dk-clean .agile-board .issue-card.prio-badge.highlight-badge[data-department] .dk-head { padding-right: 96px; }
			html.dk-clean .dk-id {
				font-family: ui-monospace, SFMono-Regular, Menlo, monospace; flex: none;
				cursor: copy;
				border-radius: 4px;
				padding: 0 4px; margin-left: -4px;
				transition: background-color .15s ease, color .15s ease;
			}
			html.dk-clean .dk-id:hover { background: var(--dk-chip); color: var(--dk-text); }
			html.dk-clean .dk-id.dk-copied { color: #3fa36b; background: transparent; }
			html.dk-clean .dk-project { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
			html.dk-clean .dk-title {
				font-size: 13px; font-weight: 500; line-height: 1.4; color: var(--dk-text);
				hyphens: auto; overflow-wrap: break-word;
				display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
			}
			html.dk-clean .dk-foot {
				display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
				margin-top: 2px; font-size: 11px; color: var(--dk-muted);
			}
			html.dk-clean .dk-tag, html.dk-clean .dk-age {
				display: inline-flex; align-items: center; gap: 3px;
				border-radius: 999px; padding: 0 7px; line-height: 18px; white-space: nowrap;
			}
			html.dk-clean .dk-tag {
				display: inline-block;
				max-width: 100%;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow: ellipsis;
				background: color-mix(in srgb, var(--tag-color) 16%, var(--dk-surface));
				border: 1px solid color-mix(in srgb, var(--tag-color) 32%, var(--dk-surface));
				color: color-mix(in srgb, var(--tag-color) 60%, var(--dk-text));
			}
			html.dk-clean .dk-age {
				--age-color: #ef9f27;
				background: color-mix(in srgb, var(--age-color) 18%, var(--dk-surface));
				color: color-mix(in srgb, var(--age-color) 60%, var(--dk-text));
			}
			html.dk-clean .dk-age.dk-age-old { --age-color: #e24b4a; }
			html.dk-clean .dk-age svg { width: 11px; height: 11px; }
			html.dk-clean .dk-bottom {
				display: flex; align-items: center; gap: 8px;
				margin-top: 2px; padding-top: 7px;
				border-top: 1px solid color-mix(in srgb, var(--dk-border) 60%, transparent);
				font-size: 11px; color: var(--dk-muted); min-height: 18px;
			}
			html.dk-clean .dk-user {
				flex: 1; min-width: 0;
				white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
			}
			html.dk-clean .dk-updated { flex: none; white-space: nowrap; }
			html.dk-clean .dk-bottom .dk-age { flex: none; }
			/* Narrow columns (e.g. with the sidebar open): drop the project */
			html.dk-clean .agile-board .issue-card { container-type: inline-size; }
			@container (max-width: 190px) {
				html.dk-clean .dk-project { display: none; }
			}

			/* --- Lighter header and toolbar (overrides the rules above) --- */

			/* Main menu: text-only hover, arrows side by side */
			html.dk-clean #main-menu li a { border-radius: 0 !important; }
			html.dk-clean #main-menu li a:hover, html.dk-clean #main-menu li a:focus {
				background: transparent !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #main-menu .tabs-buttons {
				width: auto !important; height: 100% !important; top: 0 !important;
				white-space: nowrap; display: flex; align-items: center; gap: 2px;
			}
			html.dk-clean #main-menu .tabs-buttons[style*="none"] { display: none !important; }
			html.dk-clean #main-menu .tabs-buttons button {
				float: none !important; display: inline-block !important; margin: 0 !important;
			}

			/* Toolbar: transparent controls with soft borders */
			html.dk-clean .contextual button[name="board-filter"],
			html.dk-clean .contextual button[name="reset-button"] {
				background: transparent !important;
				border-color: color-mix(in srgb, var(--dk-border) 75%, transparent) !important;
				color: var(--dk-muted) !important;
				font-weight: 500 !important;
			}
			html.dk-clean .contextual select,
			html.dk-clean .contextual input.live_search_field {
				background: color-mix(in srgb, var(--dk-surface) 60%, transparent) !important;
				border-color: color-mix(in srgb, var(--dk-border) 75%, transparent) !important;
			}
			html.dk-clean .contextual button[name="board-filter"]:hover,
			html.dk-clean .contextual button[name="reset-button"]:hover {
				background: var(--dk-chip) !important;
				color: var(--dk-text) !important;
				border-color: var(--dk-border) !important;
			}
			html.dk-clean .contextual button[name="board-filter"]:not([style*="--border-color"]).active {
				background: var(--dk-text) !important;
				color: var(--dk-bg) !important;
				border-color: var(--dk-text) !important;
			}
			/* Colored filters: colored text + soft colored border, tinted when active */
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"] {
				background: transparent !important;
				border-color: color-mix(in srgb, var(--border-color) 38%, transparent) !important;
				color: color-mix(in srgb, var(--border-color) 80%, var(--dk-text)) !important;
			}
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"]:hover {
				background: color-mix(in srgb, var(--border-color) 12%, transparent) !important;
				border-color: color-mix(in srgb, var(--border-color) 60%, transparent) !important;
				color: color-mix(in srgb, var(--border-color) 85%, var(--dk-text)) !important;
			}
			html.dk-clean .contextual button[name="board-filter"][style*="--border-color"].active {
				background: var(--border-color) !important;
				border-color: var(--border-color) !important;
				color: #fff !important;
			}
			html.dk-clean .opacity-slider-container {
				background: transparent !important;
				border-color: color-mix(in srgb, var(--dk-border) 75%, transparent) !important;
			}

			/* Query row: quiet text buttons */
			html.dk-clean #content fieldset.collapsible > legend,
			html.dk-clean #content p.buttons a {
				background: transparent !important;
				border-color: transparent !important;
				color: var(--dk-muted) !important;
				padding: 4px 8px !important;
			}
			html.dk-clean #content fieldset.collapsible > legend a { color: var(--dk-muted) !important; }
			html.dk-clean #content fieldset.collapsible > legend:hover,
			html.dk-clean #content p.buttons a:hover,
			html.dk-clean #content p.buttons a:focus {
				background: var(--dk-chip) !important;
				border-color: transparent !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #content fieldset.collapsible:not(.collapsed) > legend { color: var(--dk-text) !important; }

			/* The theme underlines every link on hover/focus — on dark that
			   reads like a white bottom border. Not for the UI controls. */
			html.dk-clean .agile-board a:hover, html.dk-clean .agile-board a:focus,
			html.dk-clean .contextual a:hover, html.dk-clean .contextual a:focus,
			html.dk-clean #query_form a:hover, html.dk-clean #query_form a:focus,
			html.dk-clean #header a:hover, html.dk-clean #header a:focus,
			html.dk-clean #top-menu a:hover, html.dk-clean #top-menu a:focus,
			html.dk-clean .createNewTicketMenuPanel a:hover {
				text-decoration: none !important;
			}
			html.dk-clean .contextual button:active { transform: none !important; }

			/* Header: fewer lines */
			html.dk-clean #top-menu { border-bottom: 0 !important; }
			html.dk-clean #header #quick-search input#q,
			html.dk-clean #header #project-jump .drdn-trigger {
				border-color: transparent !important;
				background: var(--dk-chip) !important;
			}
			html.dk-clean #main-menu .tabs-buttons { border-left: 0 !important; }
			html.dk-clean a.sidebar-toggler {
				border-color: transparent !important;
				background-color: transparent !important;
			}
			html.dk-clean a.sidebar-toggler:hover { background-color: var(--dk-chip) !important; }

			/* Dark: same simple shadow as light, just deep enough to show on
			   the near-black page. */
			html.dk-dark { --dk-hover-shadow: 0 4px 14px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.03); }
			html.dk-light { --dk-hover-shadow: 0 6px 14px var(--dk-shadow); }
			html.dk-clean .agile-board .issue-card:hover {
				box-shadow: var(--dk-hover-shadow) !important;
			}

			/* --- No lines: separation through surfaces only --- */
			html.dk-clean #main-menu {
				border-bottom: 0 !important;
				box-shadow: none !important; /* theme: light inset line */
			}
			html.dk-clean #content .agile-board table.issues-board:not(.sticky) thead th {
				background: var(--dk-bar) !important;
				border: 0 !important;
				box-shadow: none !important;
			}
			html.dk-clean .agile-board table.issues-board.sticky {
				border: 0 !important;
				box-shadow: 0 8px 20px -6px var(--dk-shadow) !important;
			}
			html.dk-clean #content .agile-board table.issues-board.sticky thead th {
				border: 0 !important;
			}
			html.dk-clean .dk-lane-head {
				border-color: transparent !important;
				background: color-mix(in srgb, var(--dk-surface) 60%, transparent) !important;
			}
			html.dk-clean .dk-lane-head:hover { background: var(--dk-surface) !important; }
			/* Multi-project lanes use a <button> — the theme gives buttons a
			   blue bottom shadow line. */
			html.dk-clean .createNewTicket,
			html.dk-clean .createNewTicket:hover,
			html.dk-clean .createNewTicket:focus,
			html.dk-clean .createNewTicket:active {
				box-shadow: none !important;
				transform: none !important;
				font-family: inherit !important;
				line-height: 1.5 !important;
			}

			/* Links (sidebar, page): readable on the theme surfaces */
			html.dk-clean #sidebar a,
			html.dk-clean #content a:not(.createNewTicket):not(.toggle-all) {
				color: var(--dk-link);
			}
			html.dk-clean #sidebar a:hover,
			html.dk-clean #content a:not(.createNewTicket):not(.toggle-all):hover {
				color: var(--dk-link-hover);
				text-decoration: none;
			}
			html.dk-clean #sidebar h3 { color: var(--dk-text) !important; }
			html.dk-light { --dk-link-hover: #0c447c; }
			html.dk-dark { --dk-link: #8fbdf0; --dk-link-hover: #c4dcf7; }

			/* --- Right-click menu --- */
			html.dk-clean #context-menu ul {
				background: var(--dk-bar) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 12px !important;
				padding: 6px !important;
				box-shadow: 0 18px 40px var(--dk-shadow) !important;
				width: 240px !important;
			}
			html.dk-clean #context-menu li { padding: 0 !important; border: 0 !important; }
			html.dk-clean #context-menu li.dk-cm-hidden { display: none !important; }
			html.dk-clean #context-menu li a {
				position: relative;
				display: flex !important; align-items: center; gap: 8px;
				padding: 6px 10px 6px 34px !important;
				border-radius: 7px !important;
				color: var(--dk-text) !important;
				background: transparent !important;
				background-image: none !important;
				border: 0 !important;
				font-size: 12px;
				text-decoration: none !important;
				white-space: nowrap;
			}
			html.dk-clean #context-menu li a::before { display: none !important; }
			html.dk-clean #context-menu li.dk-cm-item > a::after {
				content: '';
				position: absolute; left: 10px; top: 50%; margin-top: -8px;
				width: 16px; height: 16px;
				background: var(--dk-muted);
				-webkit-mask: var(--dk-icon) center / contain no-repeat;
				mask: var(--dk-icon) center / contain no-repeat;
			}
			html.dk-clean #context-menu li a:hover,
			html.dk-clean #context-menu li:hover > a.submenu {
				background: var(--dk-chip) !important;
			}
			html.dk-clean #context-menu li a.disabled,
			html.dk-clean #context-menu li a.disabled:hover {
				color: var(--dk-muted) !important;
				opacity: .55;
				background: transparent !important;
				cursor: default;
			}
			/* Submenu chevron + current value */
			html.dk-clean #context-menu li.folder > a.submenu {
				padding-right: 26px !important;
			}
			html.dk-clean #context-menu li.folder > a.submenu {
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b93a1' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 6l6 6-6 6'/%3E%3C/svg%3E") !important;
				background-repeat: no-repeat !important;
				background-position: right 8px center !important;
				background-size: 13px 13px !important;
			}
			html.dk-clean #context-menu .dk-cm-val {
				margin-left: auto;
				max-width: 96px;
				overflow: hidden; text-overflow: ellipsis;
				color: var(--dk-muted); font-size: 11px;
			}
			/* Submenus */
			html.dk-clean #context-menu li.folder ul {
				left: calc(100% - 2px) !important;
				top: -7px !important;
				width: 200px !important;
				max-height: 60vh;
				overflow-y: auto;
			}
			html.dk-clean #context-menu.reverse-x li.folder ul {
				left: auto !important;
				right: calc(100% - 2px) !important;
			}
			html.dk-clean #context-menu li.dk-cm-sub > a { padding-left: 30px !important; }
			html.dk-clean #context-menu li.dk-cm-sub > a.icon-checked {
				color: var(--dk-text) !important;
				opacity: 1 !important;
				font-weight: 500;
				background: var(--dk-chip) !important;
			}
			html.dk-clean #context-menu li.dk-cm-sub > a.icon-checked::after {
				content: '';
				position: absolute; left: 10px; top: 50%; margin-top: -7px;
				width: 14px; height: 14px;
				background: var(--dk-link);
				-webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E") center / contain no-repeat;
				mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L20 7'/%3E%3C/svg%3E") center / contain no-repeat;
			}
			/* Header, tiles, separators */
			html.dk-clean #context-menu li.dk-cm-head {
				display: flex; gap: 6px; align-items: baseline;
				padding: 4px 10px 8px !important;
				font-size: 11px; color: var(--dk-muted);
				white-space: nowrap; overflow: hidden;
			}
			html.dk-clean #context-menu .dk-cm-head-id { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; flex: none; }
			html.dk-clean #context-menu .dk-cm-head-title { overflow: hidden; text-overflow: ellipsis; }
			html.dk-clean #context-menu li.dk-cm-tiles {
				display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 4px;
				padding: 0 2px 6px !important;
			}
			html.dk-clean #context-menu a.dk-cm-tile {
				flex-direction: column; justify-content: center; gap: 4px;
				padding: 9px 2px 7px !important;
				background: var(--dk-chip) !important;
				border-radius: 8px !important;
				font-size: 11px;
			}
			html.dk-clean #context-menu a.dk-cm-tile::after { display: none; }
			html.dk-clean #context-menu a.dk-cm-tile::before {
				display: block !important;
				content: '';
				width: 16px; height: 16px;
				background: var(--dk-muted);
				-webkit-mask: var(--dk-icon) center / contain no-repeat;
				mask: var(--dk-icon) center / contain no-repeat;
			}
			html.dk-clean #context-menu a.dk-cm-tile:hover { background: color-mix(in srgb, var(--dk-text) 9%, var(--dk-chip)) !important; }
			html.dk-clean #context-menu li.dk-cm-sep {
				height: 1px; margin: 4px 4px !important;
				background: var(--dk-border);
			}
			html.dk-clean #context-menu li.dk-cm-delete > a:not(.disabled) { color: var(--dk-prio-text) !important; }
			html.dk-clean #context-menu li.dk-cm-delete > a:not(.disabled)::after { background: var(--dk-prio-text); }
			html.dk-clean #context-menu li.dk-cm-delete > a:not(.disabled):hover { background: var(--dk-prio-bg) !important; }

			/* Right-click selection: the theme paints the card dark grey with
			   an id selector — show it like a hovered card instead. */
			html.dk-clean #wrapper .agile-board .issue-card.context-menu-selection {
				background: var(--dk-surface) !important;
				color: var(--dk-text) !important;
				border-color: var(--dk-border-strong) !important;
				box-shadow: var(--dk-hover-shadow) !important;
				transform: translateY(-1px);
			}
			html.dk-clean #wrapper .agile-board .issue-card.highlight-background[data-department].context-menu-selection {
				background: color-mix(in srgb, var(--border-color) 6%, var(--dk-surface)) !important;
			}
			html.dk-clean #wrapper .agile-board .issue-card[data-department].context-menu-selection {
				border-color: color-mix(in srgb, var(--border-color) 55%, var(--dk-surface)) !important;
			}
			/* Theme hover on menu entries (light grey li background) */
			html.dk-clean #wrapper #context-menu li,
			html.dk-clean #wrapper #context-menu li:hover {
				background: transparent !important;
				border: 0 !important;
			}
			html.dk-clean #wrapper #context-menu li.dk-cm-sep,
			html.dk-clean #wrapper #context-menu li.dk-cm-sep:hover { background: var(--dk-border) !important; }

			/* Loading indicator: small pill at the top instead of the yellow box */
			html.dk-clean #ajax-indicator {
				top: 18px !important;
				left: 50% !important;
				transform: translateX(-50%);
				margin: 0 !important;
				width: auto !important;
				height: auto !important;
				padding: 7px 14px !important;
				background: var(--dk-bar) !important;
				background-image: none !important;
				color: var(--dk-text) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 999px !important;
				box-shadow: 0 10px 24px var(--dk-shadow) !important;
				font-size: 12px !important;
				font-weight: 400 !important;
				text-align: left !important;
			}
			html.dk-clean #ajax-indicator span {
				display: inline-flex; align-items: center;
				line-height: 16px !important;
				padding: 0 !important;
				background: none !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #ajax-indicator span::before {
				width: 14px !important; height: 14px !important;
				margin-right: 8px !important;
				border: 2px solid var(--dk-border) !important;
				border-top-color: var(--dk-text) !important;
				border-radius: 50% !important;
				background: none !important;
			}

			/* ===== Ticket page (/issues/123) ===== */
			html.dk-clean #content > h2 { color: var(--dk-text) !important; }
			html.dk-clean #content > .contextual a,
			html.dk-clean #content p.other-formats a {
				background: transparent !important;
				border: 1px solid color-mix(in srgb, var(--dk-border) 75%, transparent) !important;
				border-radius: 7px !important;
				color: var(--dk-text) !important;
				box-shadow: none !important;
				padding: 4px 10px !important;
				text-decoration: none !important;
			}
			html.dk-clean #content > .contextual a:hover,
			html.dk-clean #content p.other-formats a:hover {
				background: var(--dk-chip) !important;
				border-color: var(--dk-border) !important;
			}
			html.dk-clean #content > .contextual a.icon::before {
				position: static !important;
				margin: 0 6px 0 0 !important;
				color: var(--dk-muted);
			}

			html.dk-clean #content div.issue {
				background: var(--dk-surface) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 12px !important;
				padding: 20px 24px !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean div.issue .subject h3 { color: var(--dk-text) !important; }
			html.dk-clean div.issue p.author { color: var(--dk-muted) !important; }
			html.dk-clean div.issue hr {
				border: 0 !important;
				border-top: 1px solid var(--dk-border) !important;
				background: transparent !important;
			}
			html.dk-clean div.issue .attribute .label,
			html.dk-clean div.issue .attribute .label a { color: var(--dk-muted) !important; }
			html.dk-clean div.issue .attribute .value { color: var(--dk-text) !important; }
			html.dk-clean div.issue .status.attribute .value {
				display: inline-block;
				background: var(--dk-chip) !important;
				color: var(--dk-text) !important;
				border-radius: 999px !important;
				padding: 1px 10px !important;
				font-size: 11px; font-weight: 500;
				text-transform: none !important;
				letter-spacing: 0 !important;
			}
			html.dk-clean div.issue .tag-label-color {
				border-radius: 999px !important;
				padding: 1px 9px !important;
			}
			html.dk-clean div.issue .tag-label-color a {
				color: #1d2433 !important;
				background: transparent !important;
				text-decoration: none !important;
			}
			html.dk-clean div.issue .wiki,
			html.dk-clean #history .wiki { color: var(--dk-text) !important; }
			html.dk-clean div.issue .wiki img,
			html.dk-clean div.issue .attachments img { border-radius: 8px; }
			html.dk-clean div.issue .attachments table,
			html.dk-clean div.issue .attachments td { background: transparent !important; border-color: var(--dk-border) !important; }
			html.dk-clean div.issue .description > p strong,
			html.dk-clean div.issue > p strong { color: var(--dk-text) !important; }
			html.dk-clean table.progress td.closed { background: var(--dk-link) !important; }
			html.dk-clean table.progress td.todo { background: var(--dk-border) !important; }
			html.dk-clean table.progress td { border: 0 !important; }

			/* History tabs */
			html.dk-clean #history div.tabs { border-bottom: 1px solid var(--dk-border) !important; }
			html.dk-clean #history div.tabs ul { border: 0 !important; }
			html.dk-clean #history div.tabs ul li a {
				background: transparent !important;
				border: 0 !important;
				color: var(--dk-muted) !important;
				box-shadow: none !important;
				text-decoration: none !important;
			}
			html.dk-clean #history div.tabs ul li a:hover { color: var(--dk-text) !important; }
			html.dk-clean #history div.tabs ul li a.selected {
				color: var(--dk-text) !important;
				box-shadow: inset 0 -2px 0 var(--dk-text) !important;
			}
			html.dk-clean #history div.tabs .tabs-buttons { background: var(--dk-bg) !important; }
			html.dk-clean #history div.tabs .tabs-buttons button { background-color: transparent !important; border: 0 !important; }

			/* Journal entries */
			html.dk-clean #history .journal {
				background: transparent !important;
				border: 0 !important;
				border-bottom: 1px solid var(--dk-border) !important;
				border-radius: 0 !important;
				padding: 10px 0 !important;
			}
			html.dk-clean #history .journal.has-notes {
				background: var(--dk-surface) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 10px !important;
				padding: 10px 14px !important;
				margin: 10px 0;
			}
			html.dk-clean #history .journal ul.details,
			html.dk-clean #history .journal .wiki {
				border-color: var(--dk-border) !important;
			}
			html.dk-clean #history h4.note-header {
				background: transparent !important;
				border: 0 !important;
				color: var(--dk-muted) !important;
			}
			html.dk-clean #history ul.details li { color: var(--dk-muted) !important; }
			html.dk-clean #history ul.details li strong { color: var(--dk-text) !important; }
			html.dk-clean #history .journal .contextual a { opacity: .7; }

			/* Edit form */
			html.dk-clean #update > h3 { color: var(--dk-text) !important; }
			html.dk-clean #content div.box {
				background: var(--dk-surface) !important;
				border: 1px solid var(--dk-border) !important;
				border-radius: 12px !important;
				color: var(--dk-text) !important;
			}
			html.dk-clean #content fieldset:not(.collapsible) {
				border-color: var(--dk-border) !important;
			}
			html.dk-clean #content fieldset > legend,
			html.dk-clean #content .tabular label { color: var(--dk-muted) !important; }
			html.dk-clean #content input[type="submit"] {
				background: var(--dk-text) !important;
				color: var(--dk-bg) !important;
				border: 0 !important;
				border-radius: 7px !important;
				box-shadow: none !important;
				padding: 6px 14px !important;
			}
			html.dk-clean #content input[type="submit"]:hover { opacity: .9; }
			html.dk-clean .jstElements { background: transparent !important; border: 0 !important; }
			html.dk-clean .jstElements button { border-radius: 6px !important; }
			html.dk-clean .jstElements button:hover { background-color: var(--dk-chip) !important; }
			html.dk-dark .jstElements button span,
			html.dk-dark .jstElements button { filter: invert(0.85); }
			html.dk-dark .jstElements button:hover { filter: invert(0.85); }
			html.dk-clean div.jstTabs.tabs ul li a {
				background: transparent !important;
				border-color: transparent !important;
				color: var(--dk-muted) !important;
			}
			html.dk-clean div.jstTabs.tabs ul li a.selected { color: var(--dk-text) !important; }
`;function Uo(){if(hn())try{const e=JSON.parse(localStorage.getItem("dynamic-kanban-config")||"{}"),t=Array.isArray(e.profiles)?[...e.profiles]:[],r=JSON.parse(localStorage.getItem("dynamic-kanban-local-profiles")||"[]");(Array.isArray(r)?r:[]).forEach(a=>{const i=t.findIndex(l=>l.name===a.name);i>=0?t[i]=a:t.push(a)});const n=JSON.parse(localStorage.getItem("kanban_active_filters")||"{}"),o=t[n.currentProfileIndex]||t[0];Er(o?.cardStyle||"classic")}catch{}}var Wt,re,fn,Ke,gn,bn,vn,kn,Cr,Sr,Tr,wt={},xn=[],Wo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Yt=Array.isArray;function Re(e,t){for(var r in t)e[r]=t[r];return e}function Ar(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Yo(e,t,r){var n,o,a,i={};for(a in t)a=="key"?n=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?Wt.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return Xt(e,i,n,o,null)}function Xt(e,t,r,n,o){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++fn,__i:-1,__u:0};return o==null&&re.vnode!=null&&re.vnode(a),a}function Qe(e){return e.children}function Jt(e,t){this.props=e,this.context=t}function st(e,t){if(t==null)return e.__?st(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?st(e):null}function yn(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return yn(e)}}function wn(e){(!e.__d&&(e.__d=!0)&&Ke.push(e)&&!Vt.__r++||gn!=re.debounceRendering)&&((gn=re.debounceRendering)||bn)(Vt)}function Vt(){for(var e,t,r,n,o,a,i,l=1;Ke.length;)Ke.length>l&&Ke.sort(vn),e=Ke.shift(),l=Ke.length,e.__d&&(r=void 0,o=(n=(t=e).__v).__e,a=[],i=[],t.__P&&((r=Re({},n)).__v=n.__v+1,re.vnode&&re.vnode(r),Lr(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,a,o??st(n),!!(32&n.__u),i),r.__v=n.__v,r.__.__k[r.__i]=r,Tn(a,r,i),r.__e!=o&&yn(r)));Vt.__r=0}function _n(e,t,r,n,o,a,i,l,u,s,c){var p,v,y,C,D,f,k=n&&n.__k||xn,x=t.length;for(u=Xo(r,t,k,u,x),p=0;p<x;p++)(y=r.__k[p])!=null&&(v=y.__i==-1?wt:k[y.__i]||wt,y.__i=p,f=Lr(e,y,v,o,a,i,l,u,s,c),C=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&Dr(v.ref,null,y),c.push(y.ref,y.__c||C,y)),D==null&&C!=null&&(D=C),4&y.__u||v.__k===y.__k?u=En(y,u,e):typeof y.type=="function"&&f!==void 0?u=f:C&&(u=C.nextSibling),y.__u&=-7);return r.__e=D,u}function Xo(e,t,r,n,o){var a,i,l,u,s,c=r.length,p=c,v=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=a+v,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Xt(null,i,null,null,null):Yt(i)?Xt(Qe,{children:i},null,null,null):i.constructor==null&&i.__b>0?Xt(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,(s=i.__i=Jo(i,r,u,p))!=-1&&(p--,(l=r[s])&&(l.__u|=2)),l==null||l.__v==null?(s==-1&&(o>c?v--:o<c&&v++),typeof i.type!="function"&&(i.__u|=4)):s!=u&&(s==u-1?v--:s==u+1?v++:(s>u?v--:v++,i.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<c;a++)(l=r[a])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=st(l)),Ln(l,l));return n}function En(e,t,r){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,t=En(n[o],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=st(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Jo(e,t,r,n){var o,a,i,l=e.key,u=e.type,s=t[r],c=s!=null&&(2&s.__u)==0;if(s===null&&e.key==null||c&&l==s.key&&u==s.type)return r;if(n>(c?1:0)){for(o=r-1,a=r+1;o>=0||a<t.length;)if((s=t[i=o>=0?o--:a++])!=null&&(2&s.__u)==0&&l==s.key&&u==s.type)return i}return-1}function Cn(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Wo.test(t)?r:r+"px"}function Kt(e,t,r,n,o){var a,i;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Cn(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Cn(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(kn,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n?r.u=n.u:(r.u=Cr,e.addEventListener(t,a?Tr:Sr,a)):e.removeEventListener(t,a?Tr:Sr,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Sn(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Cr++;else if(t.t<r.u)return;return r(re.event?re.event(t):t)}}}function Lr(e,t,r,n,o,a,i,l,u,s){var c,p,v,y,C,D,f,k,x,j,q,X,J,ne,N,U,he,ee=t.type;if(t.constructor!=null)return null;128&r.__u&&(u=!!(32&r.__u),a=[l=t.__e=r.__e]),(c=re.__b)&&c(t);e:if(typeof ee=="function")try{if(k=t.props,x="prototype"in ee&&ee.prototype.render,j=(c=ee.contextType)&&n[c.__c],q=c?j?j.props.value:c.__:n,r.__c?f=(p=t.__c=r.__c).__=p.__E:(x?t.__c=p=new ee(k,q):(t.__c=p=new Jt(k,q),p.constructor=ee,p.render=Ko),j&&j.sub(p),p.props=k,p.state||(p.state={}),p.context=q,p.__n=n,v=p.__d=!0,p.__h=[],p._sb=[]),x&&p.__s==null&&(p.__s=p.state),x&&ee.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Re({},p.__s)),Re(p.__s,ee.getDerivedStateFromProps(k,p.__s))),y=p.props,C=p.state,p.__v=t,v)x&&ee.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),x&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(x&&ee.getDerivedStateFromProps==null&&k!==y&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(k,q),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(k,p.__s,q)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(p.props=k,p.state=p.__s,p.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(te){te&&(te.__=t)}),X=0;X<p._sb.length;X++)p.__h.push(p._sb[X]);p._sb=[],p.__h.length&&i.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(k,p.__s,q),x&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(y,C,D)})}if(p.context=q,p.props=k,p.__P=e,p.__e=!1,J=re.__r,ne=0,x){for(p.state=p.__s,p.__d=!1,J&&J(t),c=p.render(p.props,p.state,p.context),N=0;N<p._sb.length;N++)p.__h.push(p._sb[N]);p._sb=[]}else do p.__d=!1,J&&J(t),c=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++ne<25);p.state=p.__s,p.getChildContext!=null&&(n=Re(Re({},n),p.getChildContext())),x&&!v&&p.getSnapshotBeforeUpdate!=null&&(D=p.getSnapshotBeforeUpdate(y,C)),U=c,c!=null&&c.type===Qe&&c.key==null&&(U=An(c.props.children)),l=_n(e,Yt(U)?U:[U],t,r,n,o,a,i,l,u,s),p.base=t.__e,t.__u&=-161,p.__h.length&&i.push(p),f&&(p.__E=p.__=null)}catch(te){if(t.__v=null,u||a!=null)if(te.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l}else{for(he=a.length;he--;)Ar(a[he]);Ir(t)}else t.__e=r.__e,t.__k=r.__k,te.then||Ir(t);re.__e(te,t,r)}else a==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=Vo(r.__e,t,r,n,o,a,i,u,s);return(c=re.diffed)&&c(t),128&t.__u?void 0:l}function Ir(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ir)}function Tn(e,t,r){for(var n=0;n<r.length;n++)Dr(r[n],r[++n],r[++n]);re.__c&&re.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){re.__e(a,o.__v)}})}function An(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Yt(e)?e.map(An):Re({},e)}function Vo(e,t,r,n,o,a,i,l,u){var s,c,p,v,y,C,D,f=r.props,k=t.props,x=t.type;if(x=="svg"?o="http://www.w3.org/2000/svg":x=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(s=0;s<a.length;s++)if((y=a[s])&&"setAttribute"in y==!!x&&(x?y.localName==x:y.nodeType==3)){e=y,a[s]=null;break}}if(e==null){if(x==null)return document.createTextNode(k);e=document.createElementNS(o,x,k.is&&k),l&&(re.__m&&re.__m(t,a),l=!1),a=null}if(x==null)f===k||l&&e.data==k||(e.data=k);else{if(a=a&&Wt.call(e.childNodes),f=r.props||wt,!l&&a!=null)for(f={},s=0;s<e.attributes.length;s++)f[(y=e.attributes[s]).name]=y.value;for(s in f)if(y=f[s],s!="children"){if(s=="dangerouslySetInnerHTML")p=y;else if(!(s in k)){if(s=="value"&&"defaultValue"in k||s=="checked"&&"defaultChecked"in k)continue;Kt(e,s,null,y,o)}}for(s in k)y=k[s],s=="children"?v=y:s=="dangerouslySetInnerHTML"?c=y:s=="value"?C=y:s=="checked"?D=y:l&&typeof y!="function"||f[s]===y||Kt(e,s,y,f[s],o);if(c)l||p&&(c.__html==p.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(p&&(e.innerHTML=""),_n(t.type=="template"?e.content:e,Yt(v)?v:[v],t,r,n,x=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:r.__k&&st(r,0),l,u),a!=null)for(s=a.length;s--;)Ar(a[s]);l||(s="value",x=="progress"&&C==null?e.removeAttribute("value"):C!=null&&(C!==e[s]||x=="progress"&&!C||x=="option"&&C!=f[s])&&Kt(e,s,C,f[s],o),s="checked",D!=null&&D!=e[s]&&Kt(e,s,D,f[s],o))}return e}function Dr(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){re.__e(o,r)}}function Ln(e,t,r){var n,o;if(re.unmount&&re.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Dr(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){re.__e(a,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Ln(n[o],t,r||typeof e.type!="function");r||Ar(e.__e),e.__c=e.__=e.__e=void 0}function Ko(e,t,r){return this.constructor(e,r)}function Qo(e,t,r){var n,o,a,i;t==document&&(t=document.documentElement),re.__&&re.__(e,t),o=(n=!1)?null:t.__k,a=[],i=[],Lr(t,e=t.__k=Yo(Qe,null,[e]),o||wt,wt,t.namespaceURI,o?null:t.firstChild?Wt.call(t.childNodes):null,a,o?o.__e:t.firstChild,n,i),Tn(a,e,i)}Wt=xn.slice,re={__e:function(e,t,r,n){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),i=o.__d),i)return o.__E=o}catch(l){e=l}throw e}},fn=0,Jt.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Re({},this.state),typeof e=="function"&&(e=e(Re({},r),this.props)),e&&Re(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),wn(this))},Jt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),wn(this))},Jt.prototype.render=Qe,Ke=[],bn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vn=function(e,t){return e.__v.__b-t.__v.__b},Vt.__r=0,kn=/(PointerCapture)$|Capture$/i,Cr=0,Sr=Sn(!1),Tr=Sn(!0);var Zo=0;function d(e,t,r,n,o,a){t||(t={});var i,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?i=t[l]:u[l]=t[l];var s={type:e,props:u,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Zo,__i:-1,__u:0,__source:o,__self:a};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)u[l]===void 0&&(u[l]=i[l]);return re.vnode&&re.vnode(s),s}var _t,ce,Nr,In,Et=0,Dn=[],ue=re,Nn=ue.__b,Mn=ue.__r,Pn=ue.diffed,On=ue.__c,zn=ue.unmount,Bn=ue.__;function Mr(e,t){ue.__h&&ue.__h(ce,e,Et||t),Et=0;var r=ce.__H||(ce.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function we(e){return Et=1,ea(Fn,e)}function ea(e,t,r){var n=Mr(_t++,2);if(n.t=e,!n.__c&&(n.__=[Fn(void 0,t),function(l){var u=n.__N?n.__N[0]:n.__[0],s=n.t(u,l);u!==s&&(n.__N=[s,n.__[1]],n.__c.setState({}))}],n.__c=ce,!ce.__f)){var o=function(l,u,s){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(v){return!!v.__c});if(c.every(function(v){return!v.__N}))return!a||a.call(this,l,u,s);var p=n.__c.props!==l;return c.forEach(function(v){if(v.__N){var y=v.__[0];v.__=v.__N,v.__N=void 0,y!==v.__[0]&&(p=!0)}}),a&&a.call(this,l,u,s)||p};ce.__f=!0;var a=ce.shouldComponentUpdate,i=ce.componentWillUpdate;ce.componentWillUpdate=function(l,u,s){if(this.__e){var c=a;a=void 0,o(l,u,s),a=c}i&&i.call(this,l,u,s)},ce.shouldComponentUpdate=o}return n.__N||n.__}function Ct(e,t){var r=Mr(_t++,3);!ue.__s&&jn(r.__H,t)&&(r.__=e,r.u=t,ce.__H.__h.push(r))}function St(e){return Et=5,Oe(function(){return{current:e}},[])}function Oe(e,t){var r=Mr(_t++,7);return jn(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Pr(e,t){return Et=8,Oe(function(){return e},t)}function ta(){for(var e;e=Dn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qt),e.__H.__h.forEach(Or),e.__H.__h=[]}catch(t){e.__H.__h=[],ue.__e(t,e.__v)}}ue.__b=function(e){ce=null,Nn&&Nn(e)},ue.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bn&&Bn(e,t)},ue.__r=function(e){Mn&&Mn(e),_t=0;var t=(ce=e.__c).__H;t&&(Nr===ce?(t.__h=[],ce.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Qt),t.__h.forEach(Or),t.__h=[],_t=0)),Nr=ce},ue.diffed=function(e){Pn&&Pn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Dn.push(t)!==1&&In===ue.requestAnimationFrame||((In=ue.requestAnimationFrame)||ra)(ta)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Nr=ce=null},ue.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Qt),r.__h=r.__h.filter(function(n){return!n.__||Or(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ue.__e(n,r.__v)}}),On&&On(e,t)},ue.unmount=function(e){zn&&zn(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Qt(n)}catch(o){t=o}}),r.__H=void 0,t&&ue.__e(t,r.__v))};var Rn=typeof requestAnimationFrame=="function";function ra(e){var t,r=function(){clearTimeout(n),Rn&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Rn&&(t=requestAnimationFrame(r))}function Qt(e){var t=ce,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),ce=t}function Or(e){var t=ce;e.__c=e.__(),ce=t}function jn(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Fn(e,t){return typeof t=="function"?t(e):t}const zr="-",na=e=>{const t=aa(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:i=>{const l=i.split(zr);return l[0]===""&&l.length!==1&&l.shift(),qn(l,t)||oa(i)},getConflictingClassGroupIds:(i,l)=>{const u=r[i]||[];return l&&n[i]?[...u,...n[i]]:u}}},qn=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),o=n?qn(e.slice(1),n):void 0;if(o)return o;if(t.validators.length===0)return;const a=e.join(zr);return t.validators.find(({validator:i})=>i(a))?.classGroupId},Hn=/^\[(.+)\]$/,oa=e=>{if(Hn.test(e)){const t=Hn.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},aa=e=>{const{theme:t,classGroups:r}=e,n={nextPart:new Map,validators:[]};for(const o in r)Br(r[o],n,o,t);return n},Br=(e,t,r,n)=>{e.forEach(o=>{if(typeof o=="string"){const a=o===""?t:$n(t,o);a.classGroupId=r;return}if(typeof o=="function"){if(ia(o)){Br(o(n),t,r,n);return}t.validators.push({validator:o,classGroupId:r});return}Object.entries(o).forEach(([a,i])=>{Br(i,$n(t,a),r,n)})})},$n=(e,t)=>{let r=e;return t.split(zr).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},ia=e=>e.isThemeGetter,la=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const o=(a,i)=>{r.set(a,i),t++,t>e&&(t=0,n=r,r=new Map)};return{get(a){let i=r.get(a);if(i!==void 0)return i;if((i=n.get(a))!==void 0)return o(a,i),i},set(a,i){r.has(a)?r.set(a,i):o(a,i)}}},Rr="!",jr=":",sa=jr.length,ca=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=o=>{const a=[];let i=0,l=0,u=0,s;for(let C=0;C<o.length;C++){let D=o[C];if(i===0&&l===0){if(D===jr){a.push(o.slice(u,C)),u=C+sa;continue}if(D==="/"){s=C;continue}}D==="["?i++:D==="]"?i--:D==="("?l++:D===")"&&l--}const c=a.length===0?o:o.substring(u),p=da(c),v=p!==c,y=s&&s>u?s-u:void 0;return{modifiers:a,hasImportantModifier:v,baseClassName:p,maybePostfixModifierPosition:y}};if(t){const o=t+jr,a=n;n=i=>i.startsWith(o)?a(i.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:i,maybePostfixModifierPosition:void 0}}if(r){const o=n;n=a=>r({className:a,parseClassName:o})}return n},da=e=>e.endsWith(Rr)?e.substring(0,e.length-1):e.startsWith(Rr)?e.substring(1):e,ua=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const o=[];let a=[];return n.forEach(i=>{i[0]==="["||t[i]?(o.push(...a.sort(),i),a=[]):a.push(i)}),o.push(...a.sort()),o}},pa=e=>({cache:la(e.cacheSize),parseClassName:ca(e),sortModifiers:ua(e),...na(e)}),ma=/\s+/,ha=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:o,sortModifiers:a}=t,i=[],l=e.trim().split(ma);let u="";for(let s=l.length-1;s>=0;s-=1){const c=l[s],{isExternal:p,modifiers:v,hasImportantModifier:y,baseClassName:C,maybePostfixModifierPosition:D}=r(c);if(p){u=c+(u.length>0?" "+u:u);continue}let f=!!D,k=n(f?C.substring(0,D):C);if(!k){if(!f){u=c+(u.length>0?" "+u:u);continue}if(k=n(C),!k){u=c+(u.length>0?" "+u:u);continue}f=!1}const x=a(v).join(":"),j=y?x+Rr:x,q=j+k;if(i.includes(q))continue;i.push(q);const X=o(k,f);for(let J=0;J<X.length;++J){const ne=X[J];i.push(j+ne)}u=c+(u.length>0?" "+u:u)}return u};function fa(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Gn(t))&&(n&&(n+=" "),n+=r);return n}const Gn=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Gn(e[n]))&&(r&&(r+=" "),r+=t);return r};function ga(e,...t){let r,n,o,a=i;function i(u){const s=t.reduce((c,p)=>p(c),e());return r=pa(s),n=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){const s=n(u);if(s)return s;const c=ha(u,r);return o(u,c),c}return function(){return a(fa.apply(null,arguments))}}const ge=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Un=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Wn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ba=/^\d+\/\d+$/,va=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ka=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xa=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ya=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ct=e=>ba.test(e),Y=e=>!!e&&!Number.isNaN(Number(e)),Ge=e=>!!e&&Number.isInteger(Number(e)),Fr=e=>e.endsWith("%")&&Y(e.slice(0,-1)),je=e=>va.test(e),_a=()=>!0,Ea=e=>ka.test(e)&&!xa.test(e),Yn=()=>!1,Ca=e=>ya.test(e),Sa=e=>wa.test(e),Ta=e=>!P(e)&&!O(e),Aa=e=>dt(e,Qn,Yn),P=e=>Un.test(e),Ze=e=>dt(e,Zn,Ea),qr=e=>dt(e,Ma,Y),Xn=e=>dt(e,Vn,Yn),La=e=>dt(e,Kn,Sa),Zt=e=>dt(e,eo,Ca),O=e=>Wn.test(e),Tt=e=>ut(e,Zn),Ia=e=>ut(e,Pa),Jn=e=>ut(e,Vn),Da=e=>ut(e,Qn),Na=e=>ut(e,Kn),er=e=>ut(e,eo,!0),dt=(e,t,r)=>{const n=Un.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},ut=(e,t,r=!1)=>{const n=Wn.exec(e);return n?n[1]?t(n[1]):r:!1},Vn=e=>e==="position"||e==="percentage",Kn=e=>e==="image"||e==="url",Qn=e=>e==="length"||e==="size"||e==="bg-size",Zn=e=>e==="length",Ma=e=>e==="number",Pa=e=>e==="family-name",eo=e=>e==="shadow",Oa=ga(()=>{const e=ge("color"),t=ge("font"),r=ge("text"),n=ge("font-weight"),o=ge("tracking"),a=ge("leading"),i=ge("breakpoint"),l=ge("container"),u=ge("spacing"),s=ge("radius"),c=ge("shadow"),p=ge("inset-shadow"),v=ge("text-shadow"),y=ge("drop-shadow"),C=ge("blur"),D=ge("perspective"),f=ge("aspect"),k=ge("ease"),x=ge("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],X=()=>[...q(),O,P],J=()=>["auto","hidden","clip","visible","scroll"],ne=()=>["auto","contain","none"],N=()=>[O,P,u],U=()=>[ct,"full","auto",...N()],he=()=>[Ge,"none","subgrid",O,P],ee=()=>["auto",{span:["full",Ge,O,P]},Ge,O,P],te=()=>[Ge,"auto",O,P],le=()=>["auto","min","max","fr",O,P],be=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ee=()=>["start","end","center","stretch","center-safe","end-safe"],de=()=>["auto",...N()],Ae=()=>[ct,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],R=()=>[e,O,P],vt=()=>[...q(),Jn,Xn,{position:[O,P]}],Gt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],at=()=>["auto","cover","contain",Da,Aa,{size:[O,P]}],it=()=>[Fr,Tt,Ze],ke=()=>["","none","full",s,O,P],Ce=()=>["",Y,Tt,Ze],kt=()=>["solid","dashed","dotted","double"],wr=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],fe=()=>[Y,Fr,Jn,Xn],_r=()=>["","none",C,O,P],xt=()=>["none",Y,O,P],yt=()=>["none",Y,O,P],Ut=()=>[Y,O,P],lt=()=>[ct,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[je],breakpoint:[je],color:[_a],container:[je],"drop-shadow":[je],ease:["in","out","in-out"],font:[Ta],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[je],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[je],shadow:[je],spacing:["px",Y],text:[je],"text-shadow":[je],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ct,P,O,f]}],container:["container"],columns:[{columns:[Y,P,O,l]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:X()}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:U()}],"inset-x":[{"inset-x":U()}],"inset-y":[{"inset-y":U()}],start:[{start:U()}],end:[{end:U()}],top:[{top:U()}],right:[{right:U()}],bottom:[{bottom:U()}],left:[{left:U()}],visibility:["visible","invisible","collapse"],z:[{z:[Ge,"auto",O,P]}],basis:[{basis:[ct,"full","auto",l,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,ct,"auto","initial","none",P]}],grow:[{grow:["",Y,O,P]}],shrink:[{shrink:["",Y,O,P]}],order:[{order:[Ge,"first","last","none",O,P]}],"grid-cols":[{"grid-cols":he()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":he()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...be(),"normal"]}],"justify-items":[{"justify-items":[...Ee(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ee()]}],"align-content":[{content:["normal",...be()]}],"align-items":[{items:[...Ee(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ee(),{baseline:["","last"]}]}],"place-content":[{"place-content":be()}],"place-items":[{"place-items":[...Ee(),"baseline"]}],"place-self":[{"place-self":["auto",...Ee()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:de()}],mx:[{mx:de()}],my:[{my:de()}],ms:[{ms:de()}],me:[{me:de()}],mt:[{mt:de()}],mr:[{mr:de()}],mb:[{mb:de()}],ml:[{ml:de()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ae()}],w:[{w:[l,"screen",...Ae()]}],"min-w":[{"min-w":[l,"screen","none",...Ae()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[i]},...Ae()]}],h:[{h:["screen","lh",...Ae()]}],"min-h":[{"min-h":["screen","lh","none",...Ae()]}],"max-h":[{"max-h":["screen","lh",...Ae()]}],"font-size":[{text:["base",r,Tt,Ze]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,O,qr]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Fr,P]}],"font-family":[{font:[Ia,P,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,O,P]}],"line-clamp":[{"line-clamp":[Y,"none",O,qr]}],leading:[{leading:[a,...N()]}],"list-image":[{"list-image":["none",O,P]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",O,P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:R()}],"text-color":[{text:R()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...kt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",O,Ze]}],"text-decoration-color":[{decoration:R()}],"underline-offset":[{"underline-offset":[Y,"auto",O,P]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O,P]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O,P]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:vt()}],"bg-repeat":[{bg:Gt()}],"bg-size":[{bg:at()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ge,O,P],radial:["",O,P],conic:[Ge,O,P]},Na,La]}],"bg-color":[{bg:R()}],"gradient-from-pos":[{from:it()}],"gradient-via-pos":[{via:it()}],"gradient-to-pos":[{to:it()}],"gradient-from":[{from:R()}],"gradient-via":[{via:R()}],"gradient-to":[{to:R()}],rounded:[{rounded:ke()}],"rounded-s":[{"rounded-s":ke()}],"rounded-e":[{"rounded-e":ke()}],"rounded-t":[{"rounded-t":ke()}],"rounded-r":[{"rounded-r":ke()}],"rounded-b":[{"rounded-b":ke()}],"rounded-l":[{"rounded-l":ke()}],"rounded-ss":[{"rounded-ss":ke()}],"rounded-se":[{"rounded-se":ke()}],"rounded-ee":[{"rounded-ee":ke()}],"rounded-es":[{"rounded-es":ke()}],"rounded-tl":[{"rounded-tl":ke()}],"rounded-tr":[{"rounded-tr":ke()}],"rounded-br":[{"rounded-br":ke()}],"rounded-bl":[{"rounded-bl":ke()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...kt(),"hidden","none"]}],"divide-style":[{divide:[...kt(),"hidden","none"]}],"border-color":[{border:R()}],"border-color-x":[{"border-x":R()}],"border-color-y":[{"border-y":R()}],"border-color-s":[{"border-s":R()}],"border-color-e":[{"border-e":R()}],"border-color-t":[{"border-t":R()}],"border-color-r":[{"border-r":R()}],"border-color-b":[{"border-b":R()}],"border-color-l":[{"border-l":R()}],"divide-color":[{divide:R()}],"outline-style":[{outline:[...kt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,O,P]}],"outline-w":[{outline:["",Y,Tt,Ze]}],"outline-color":[{outline:R()}],shadow:[{shadow:["","none",c,er,Zt]}],"shadow-color":[{shadow:R()}],"inset-shadow":[{"inset-shadow":["none",p,er,Zt]}],"inset-shadow-color":[{"inset-shadow":R()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:R()}],"ring-offset-w":[{"ring-offset":[Y,Ze]}],"ring-offset-color":[{"ring-offset":R()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":R()}],"text-shadow":[{"text-shadow":["none",v,er,Zt]}],"text-shadow-color":[{"text-shadow":R()}],opacity:[{opacity:[Y,O,P]}],"mix-blend":[{"mix-blend":[...wr(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":wr()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":R()}],"mask-image-linear-to-color":[{"mask-linear-to":R()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":R()}],"mask-image-t-to-color":[{"mask-t-to":R()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":R()}],"mask-image-r-to-color":[{"mask-r-to":R()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":R()}],"mask-image-b-to-color":[{"mask-b-to":R()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":R()}],"mask-image-l-to-color":[{"mask-l-to":R()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":R()}],"mask-image-x-to-color":[{"mask-x-to":R()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":R()}],"mask-image-y-to-color":[{"mask-y-to":R()}],"mask-image-radial":[{"mask-radial":[O,P]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":R()}],"mask-image-radial-to-color":[{"mask-radial-to":R()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":R()}],"mask-image-conic-to-color":[{"mask-conic-to":R()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:vt()}],"mask-repeat":[{mask:Gt()}],"mask-size":[{mask:at()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",O,P]}],filter:[{filter:["","none",O,P]}],blur:[{blur:_r()}],brightness:[{brightness:[Y,O,P]}],contrast:[{contrast:[Y,O,P]}],"drop-shadow":[{"drop-shadow":["","none",y,er,Zt]}],"drop-shadow-color":[{"drop-shadow":R()}],grayscale:[{grayscale:["",Y,O,P]}],"hue-rotate":[{"hue-rotate":[Y,O,P]}],invert:[{invert:["",Y,O,P]}],saturate:[{saturate:[Y,O,P]}],sepia:[{sepia:["",Y,O,P]}],"backdrop-filter":[{"backdrop-filter":["","none",O,P]}],"backdrop-blur":[{"backdrop-blur":_r()}],"backdrop-brightness":[{"backdrop-brightness":[Y,O,P]}],"backdrop-contrast":[{"backdrop-contrast":[Y,O,P]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,O,P]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,O,P]}],"backdrop-invert":[{"backdrop-invert":["",Y,O,P]}],"backdrop-opacity":[{"backdrop-opacity":[Y,O,P]}],"backdrop-saturate":[{"backdrop-saturate":[Y,O,P]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,O,P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",O,P]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",O,P]}],ease:[{ease:["linear","initial",k,O,P]}],delay:[{delay:[Y,O,P]}],animate:[{animate:["none",x,O,P]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[D,O,P]}],"perspective-origin":[{"perspective-origin":X()}],rotate:[{rotate:xt()}],"rotate-x":[{"rotate-x":xt()}],"rotate-y":[{"rotate-y":xt()}],"rotate-z":[{"rotate-z":xt()}],scale:[{scale:yt()}],"scale-x":[{"scale-x":yt()}],"scale-y":[{"scale-y":yt()}],"scale-z":[{"scale-z":yt()}],"scale-3d":["scale-3d"],skew:[{skew:Ut()}],"skew-x":[{"skew-x":Ut()}],"skew-y":[{"skew-y":Ut()}],transform:[{transform:[O,P,"","none","gpu","cpu"]}],"transform-origin":[{origin:X()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:lt()}],"translate-x":[{"translate-x":lt()}],"translate-y":[{"translate-y":lt()}],"translate-z":[{"translate-z":lt()}],"translate-none":["translate-none"],accent:[{accent:R()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:R()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O,P]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O,P]}],fill:[{fill:["none",...R()]}],"stroke-w":[{stroke:[Y,Tt,Ze,qr]}],stroke:[{stroke:["none",...R()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function za(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var to;function Ba(){return to||(to=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=o(a,n(l)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)t.call(a,l)&&a[l]&&(i=o(i,l));return i}function o(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Hr)),Hr.exports}var Ra=Ba();const ja=za(Ra);function Ue(...e){return Oa(ja(...e))}function Fa({children:e}){const[t,r]=we(!1),n=St(null),o=St(null);return Ct(()=>{if(!t)return;function a(l){const u=l.target;n.current&&!n.current.contains(u)&&o.current&&!o.current.contains(u)&&r(!1)}function i(l){l.key==="Escape"&&r(!1)}return document.addEventListener("mousedown",a),document.addEventListener("keydown",i),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",i)}},[t]),d(Qe,{children:[d("button",{ref:o,onClick:()=>r(a=>!a),class:Ue("group fixed bottom-4 right-4 z-50 !text-white !p-3 !rounded-full border-none!","!shadow-2xl cursor-pointer !bg-gray-900 hover:!bg-gray-800 transition-all"),"aria-expanded":t,"aria-controls":"floating-panel",children:d("svg",{className:"h-6 w-6 fill-current transition-all group-hover:-rotate-45",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:d("path",{d:`M246.9 82.3L271 67.8C292.6 54.8 317.3 48 342.5 48C379.3 48 414.7 62.6 440.7 
                        88.7L504.6 152.6C519.6 167.6 528 188 528 209.2L528 240.1L547.7 259.8L547.7 259.8C563.3 
                        244.2 588.6 244.2 604.3 259.8C620 275.4 619.9 300.7 604.3 316.4L540.3 380.4C524.7 396
                        499.4 396 483.7 380.4C468 364.8 468.1 339.5 483.7 323.8L464 304L433.1 304C411.9 304 
                        391.5 295.6 376.5 280.6L327.4 231.5C312.4 216.5 304 196.1 304 174.9L304 162.2C304 151 298.1 140.5
                        288.5 134.8L246.9 109.8C236.5 103.6 236.5 88.6 246.9 82.4zM50.7 466.7L272.8 244.6L363.3 335.1L141.2
                        557.2C116.2 582.2 75.7 582.2 50.7 557.2C25.7 532.2 25.7 491.7 50.7 466.7z`})})}),t&&d("div",{id:"floating-panel",ref:n,class:Ue("fixed bottom-18 right-4 w-[750px] h-[calc(100vh-8rem)] flex flex-col gap-sm","overflow-y-hidden max-w-[90%] bg-gray-900 text-white p-4 rounded-lg shadow-xl z-40"),style:{minHeight:"200px"},children:e})]})}function K({onClick:e,children:t,disabled:r,variant:n="gray",className:o="",title:a}){return d("button",{type:"button",disabled:r,title:a,onClick:e,class:Ue(["!text-sm !px-3 !py-1 !border-0 !rounded cursor-pointer !shadow-none whitespace-nowrap",n==="gray"&&"!bg-gray-700 hover:!bg-gray-600",n==="green"&&"!bg-green-800 hover:!bg-green-700",n==="red"&&"!bg-red-900 hover:!bg-red-800",r&&"!opacity-20 !pointer-events-none",o]),children:t})}const At={profiles:[],tags:[],dynamicTags:[],swimlanes:[],swimlaneGroups:[]},tr="dynamic-kanban-config",$r="dynamic-kanban-config-url",Gr="dynamic-kanban-config-synced-at",rr="dynamic-kanban-config-edit-url",nr="dynamic-kanban-config-remote",or="dynamic-kanban-config-base";function et(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function Lt(){return localStorage.getItem($r)||""}function ro(e){e?localStorage.setItem($r,e):[$r,Gr,nr,or,rr].forEach(t=>localStorage.removeItem(t))}function qa(){const e=Number(localStorage.getItem(Gr));return e?new Date(e):null}function Ur(e){if(/\/wiki\/[^/]+\.txt$/.test(e))return e.replace(/\.txt$/,"/edit");const t=e.match(/^https:\/\/gist\.githubusercontent\.com\/([^/]+)\/([^/]+)\/raw\//);if(t)return`https://gist.github.com/${t[1]}/${t[2]}/edit`;const r=e.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);return r?`https://github.com/${r[1]}/${r[2]}/edit/${r[3]}/${r[4]}`:null}function no(){return localStorage.getItem(rr)||""}function Ha(e){e?localStorage.setItem(rr,e):localStorage.removeItem(rr)}function $a(){return no()||Ur(Lt())}function Ga(e){let t;try{t=JSON.parse(e)}catch{const r=e.indexOf("{"),n=e.lastIndexOf("}");try{t=JSON.parse(e.slice(r,n+1))}catch{throw new Error("the URL does not return a valid JSON config")}}if(!t||typeof t!="object"||Array.isArray(t))throw new Error("the URL does not return a valid JSON config");return Object.keys(At).forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t}async function Ua(e){let t;try{t=await fetch(e,{cache:"no-store"})}catch{throw new Error("the URL could not be reached or blocks access from this page")}if(!t.ok)throw new Error(`the server answered with HTTP ${t.status}`);return Ga(await t.text())}const It=e=>`${e.boardId}:${e.identifier}`;function Dt(e){return Array.isArray(e)?`[${e.map(Dt).join(",")}]`:e&&typeof e=="object"?`{${Object.keys(e).filter(t=>e[t]!==void 0).sort().map(t=>`${JSON.stringify(t)}:${Dt(e[t])}`).join(",")}}`:JSON.stringify(e)}function oo(e,t){const r=new Set((t?.swimlanes||[]).map(It)),n=(e?.swimlanes||[]).filter(o=>r.has(It(o))).map(o=>({key:It(o),name:o.name,sort:o.sort})).sort((o,a)=>o.key.localeCompare(a.key));return Dt({...e,profiles:(e?.profiles||[]).filter(o=>o.local!==!0),swimlanes:n})}function Nt(e,t){return oo(e,t)===oo(t,t)}function Wa(e,t){const r=new Set(e.swimlanes.map(It));return{...e,swimlanes:[...e.swimlanes,...(t?.swimlanes||[]).filter(n=>!r.has(It(n)))]}}function ao(e,t){localStorage.setItem(tr,JSON.stringify(Wa(e,t))),localStorage.setItem(or,JSON.stringify(e))}async function io(e,t=!1){const r=await Ua(e),n=et(tr),o=et(or);localStorage.setItem(Gr,String(Date.now())),localStorage.setItem(nr,JSON.stringify(r));const a=n&&o&&!Nt(n,o);(t||!a||Nt(n,r))&&ao(r,n)}function Ya(){const e=et(nr);e&&ao(e,et(tr))}function ar(){return Lt()?et(nr):null}function Xa(){const e=ar();if(!e)return"none";const t=et(tr);if(Nt(t,e))return"synced";const r=et(or);return r&&!Nt(r,e)?"updates":"edited"}function lo(e){const t=ar();return!!t&&!Nt(e,t)}function so(e){const t=ar();if(!t||e.local===!0)return null;const r=t.profiles.find(n=>n.name===e.name);return r?Dt(r)===Dt(e)?null:"edited":"new"}function Ja(){const e=Lt();e&&io(e).catch(t=>console.warn("Dynamic Kanban: could not load config from URL",t))}const ir="dynamic-kanban-config",co="dynamic-kanban-local-profiles";function Wr(e){try{return e?JSON.parse(e):null}catch{return null}}function Va(){const e=Wr(localStorage.getItem(co));return Array.isArray(e)?e:[]}function Yr(e){const t=Va();if(!t.length||!e||typeof e!="object")return e;const r=[...e.profiles||[]];return t.forEach(n=>{const o=r.findIndex(a=>a.name===n.name);o>=0?r[o]=n:r.push(n)}),{...e,profiles:r}}function Mt(e){return!e||typeof e!="object"?e:{...e,profiles:(e.profiles||[]).filter(t=>t.local!==!0)}}function Ka(){const e=localStorage.getItem(ir),t=Wr(e),r=Yr(t??At),[n,o]=we(r),a=s=>{o(c=>{const p=typeof s=="function"?s(c):s;try{const v=(p?.profiles||[]).filter(D=>D.local===!0);localStorage.setItem(co,JSON.stringify(v));const y=new Set(v.map(D=>D.name)),C=Wr(localStorage.getItem(ir));if(C&&Array.isArray(C.profiles)){const D=C.profiles.filter(f=>!y.has(f.name));D.length!==C.profiles.length&&localStorage.setItem(ir,JSON.stringify({...C,profiles:D}))}}catch{}return p})},i=()=>{localStorage.setItem(ir,JSON.stringify(Mt(n))),location.reload()},l=()=>{a(Yr(ar()??At))},u=Oe(()=>{if(!t)return!0;try{return JSON.stringify(Mt(n))!==JSON.stringify(Mt(t))}catch{return!1}},[n,e]);return[n,a,i,l,u]}function Le({label:e,value:t,placeholder:r,type:n="text",onChange:o,isColorInput:a=!1,fullWidth:i=!1}){return d("div",{class:Ue("flex text-xs text-white gap-2",a?"flex-row items-center":"flex-col",i&&"w-full min-w-0"),onClick:l=>l.stopPropagation(),children:[e&&d("span",{children:e}),d("input",{type:n,value:t,placeholder:r,onInput:l=>{o(l.currentTarget.value)},class:Ue("!text-sm !rounded-xl !bg-gray-900 !border-none","focus:outline-none !text-white",a?"!p-0 !bg-transparent custom-color-swatch cursor-pointer":"!p-2 focus:!bg-gray-600",i&&"w-full min-w-0")})]})}function uo(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M152 160C174.1 160 192 177.9 192 200L192 248C192 270.1 174.1 288 152 288L104 288C81.9 288 64 270.1 64 248L64 200C64 177.9 81.9 160 104 160L152 160zM344 288L296 288C273.9 288 256 270.1 256 248L256 200C256 177.9 273.9 160 296 160L344 160C366.1 160 384 177.9 384 200L384 248C384 270.1 366.1 288 344 288zM536 288L488 288C465.9 288 448 270.1 448 248L448 200C448 177.9 465.9 160 488 160L536 160C558.1 160 576 177.9 576 200L576 248C576 270.1 558.1 288 536 288zM536 480L488 480C465.9 480 448 462.1 448 440L448 392C448 369.9 465.9 352 488 352L536 352C558.1 352 576 369.9 576 392L576 440C576 462.1 558.1 480 536 480zM344 352C366.1 352 384 369.9 384 392L384 440C384 462.1 366.1 480 344 480L296 480C273.9 480 256 462.1 256 440L256 392C256 369.9 273.9 352 296 352L344 352zM152 480L104 480C81.9 480 64 462.1 64 440L64 392C64 369.9 81.9 352 104 352L152 352C174.1 352 192 369.9 192 392L192 440C192 462.1 174.1 480 152 480z"})})}function Qa(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M416.9 85.2L372 130.1 509.9 268 554.8 223.1C568.4 209.5 576 191.1 576 171.9C576 152.7 568.4 134.3 554.8 120.7L519.2 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.8 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.8C236.9 535.7 250.2 528 260.9 517.2L476 302 338.1 164z"})})}function Fe(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"})})}function Za({dynamicTags:e,setConfig:t}){const r=Pr((a,i,l)=>{t(u=>{const s=[...u.dynamicTags];return s[a]={...s[a],[i]:l},{...u,dynamicTags:s}})},[t]),n=a=>{t(i=>{const l=[...i.dynamicTags];return l.splice(a,1),{...i,dynamicTags:l}})};return d("div",{className:"flex flex-col gap-4 h-fit",children:[d("div",{className:"flex gap-4 justify-between",children:[d("span",{className:"text-2xl",children:"Edit Dynamic Tags"}),d(K,{onClick:()=>{const a={label:"",valueTemplate:"",prompt:"",color:"#555555",gifUrl:""};t(i=>({...i,dynamicTags:[...i.dynamicTags,a]}))},children:"Add Tag +"})]}),d("div",{class:"grid grid-cols-2 gap-3",children:e.map((a,i)=>d("div",{class:"bg-gray-800 rounded-xl p-4 space-y-2",children:d("div",{class:"grid grid-cols-1 gap-2",children:[d(Le,{label:"Label",value:a.label,onChange:l=>r(i,"label",l),placeholder:"Label"}),d(Le,{label:"GIF URL",value:a.gifUrl||"",onChange:l=>r(i,"gifUrl",l),placeholder:"Enter GIF URL"}),d(Le,{label:"Value Template",value:a.valueTemplate,onChange:l=>r(i,"valueTemplate",l),placeholder:"{value} in Label"}),d(Le,{label:"Prompt",value:a.prompt,onChange:l=>r(i,"prompt",l),placeholder:"Prompt"}),d("div",{className:"flex justify-between gap-2",children:[d(Le,{label:"Color",value:a.color,type:"color",onChange:l=>r(i,"color",l),placeholder:"Prompt",isColorInput:!0}),d(K,{onClick:()=>n(i),variant:"red",children:d(Fe,{})})]})]})},i))})]})}function ei({tags:e,setConfig:t}){const r=Pr((a,i,l)=>{t(u=>{const s=[...u.tags];return s[a]={...s[a],[i]:l},{...u,tags:s}})},[t]),n=a=>{t(i=>{const l=[...i.tags];return l.splice(a,1),{...i,tags:l}})};return d("div",{className:"flex flex-col gap-4 h-fit",children:[d("div",{className:"flex gap-4 justify-between",children:[d("span",{className:"text-2xl",children:"Edit Tags"}),d(K,{onClick:()=>{const a={label:"",color:"#888888",gifUrl:""};t(i=>({...i,tags:[...i.tags,a]}))},children:"Add Tag +"})]}),d("div",{class:"grid grid-cols-2 gap-3",children:e.map((a,i)=>d("div",{class:"bg-gray-800 rounded-xl p-4 space-y-2",children:d("div",{class:"grid grid-cols-1 gap-2",children:[d(Le,{label:"Label",value:a.label,onChange:l=>r(i,"label",l),placeholder:"Label"}),d(Le,{label:"GIF URL",value:a.gifUrl||"",onChange:l=>r(i,"gifUrl",l),placeholder:"Enter GIF URL"}),d("div",{className:"flex justify-between gap-2",children:[d(Le,{label:"Color",type:"color",value:a.color,onChange:l=>r(i,"color",l),placeholder:"Color",isColorInput:!0}),d(K,{onClick:()=>n(i),variant:"red",children:d(Fe,{})})]})]})},i))})]})}function ti({profile:e,onChange:t}){return d("div",{class:"grid grid-cols-2 gap-4 select-none",children:[d(ri,{addBorderHighlight:e.addBorderHighlight,addBadgeHighlight:e.addBadgeHighlight,addBgHighlight:e.addBgHighlight,addPriorityBadge:e.addPriorityBadge}),d("div",{className:"flex flex-col gap-3",children:[d(tt,{enabled:e.addBgHighlight,onClick:()=>t({addBgHighlight:!e.addBgHighlight}),children:"Add Background Highlighting"}),d(tt,{enabled:e.addBorderHighlight,onClick:()=>t({addBorderHighlight:!e.addBorderHighlight}),children:"Add Border Highlighting"}),d(tt,{enabled:e.addBadgeHighlight,onClick:()=>t({addBadgeHighlight:!e.addBadgeHighlight}),children:"Add Department Badge"}),d(tt,{enabled:e.addPriorityBadge,onClick:()=>t({addPriorityBadge:!e.addPriorityBadge}),children:"Add Priority Badge"})]})]})}function tt({enabled:e,onClick:t,children:r}){return d("div",{class:Ue("w-full rounded-md cursor-pointer select-none bg-gray-800 py-2 px-3 h-full",e?"bg-green-800 hover:bg-green-700":" bg-gray-700 hover:bg-gray-600"),onClick:t,children:r})}function ri({addBorderHighlight:e=!1,addBgHighlight:t=!1,addBadgeHighlight:r=!1,addPriorityBadge:n=!1}){return d("div",{className:Ue("w-full h-full flex flex-col gap-3 relative rounded-md p-4 border-4 [--border-color:#703ba1] [--prio-color:#b31814]",t?"highlight-background":"bg-gray-200",e?"border-[var(--border-color)]":"border-gray-800",r&&"highlight-badge",n&&"prio-badge"),children:[d("span",{className:Ue("bg-white rounded px-2 py-1 w-full cursor-default","text-center text-gray-700 border border-gray-300"),children:"Beispielprojekt"}),d("div",{className:"flex flex-col gap-sm",children:[d("span",{class:"font-bold text-gray-800",children:"#12345: Navigation"}),d("span",{class:"text-gray-700",children:[d("span",{class:"font-semibold",children:"Aktualisiert:"})," 23.07.2025 10:32"]}),d("span",{class:"text-gray-700",children:[d("span",{class:"font-semibold",children:"Tags:"})," ",d("span",{class:"bg-purple-700 text-white px-2 rounded",children:"27 Std"})]})]})]})}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function po(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?po(Object(r),!0).forEach(function(n){ni(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):po(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lr(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?lr=function(t){return typeof t}:lr=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function ni(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qe(){return qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qe.apply(this,arguments)}function oi(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function ai(e,t){if(e==null)return{};var r=oi(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ii="1.15.6";function He(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var $e=He(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pt=He(/Edge/i),mo=He(/firefox/i),Ot=He(/safari/i)&&!He(/chrome/i)&&!He(/android/i),Xr=He(/iP(ad|od|hone)/i),ho=He(/chrome/i)&&He(/android/i),fo={capture:!1,passive:!1};function Q(e,t,r){e.addEventListener(t,r,!$e&&fo)}function V(e,t,r){e.removeEventListener(t,r,!$e&&fo)}function sr(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function go(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function Me(e,t,r,n){if(e){r=r||document;do{if(t!=null&&(t[0]===">"?e.parentNode===r&&sr(e,t):sr(e,t))||n&&e===r)return e;if(e===r)break}while(e=go(e))}return null}var bo=/\s+/g;function Ie(e,t,r){if(e&&t)if(e.classList)e.classList[r?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(bo," ").replace(" "+t+" "," ");e.className=(n+(r?" "+t:"")).replace(bo," ")}}function H(e,t,r){var n=e&&e.style;if(n){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(r=e.currentStyle),t===void 0?r:r[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=r+(typeof r=="string"?"":"px")}}function pt(e,t){var r="";if(typeof e=="string")r=e;else do{var n=H(e,"transform");n&&n!=="none"&&(r=n+" "+r)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(r)}function vo(e,t,r){if(e){var n=e.getElementsByTagName(t),o=0,a=n.length;if(r)for(;o<a;o++)r(n[o],o);return n}return[]}function Be(){var e=document.scrollingElement;return e||document.documentElement}function pe(e,t,r,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var a,i,l,u,s,c,p;if(e!==window&&e.parentNode&&e!==Be()?(a=e.getBoundingClientRect(),i=a.top,l=a.left,u=a.bottom,s=a.right,c=a.height,p=a.width):(i=0,l=0,u=window.innerHeight,s=window.innerWidth,c=window.innerHeight,p=window.innerWidth),(t||r)&&e!==window&&(o=o||e.parentNode,!$e))do if(o&&o.getBoundingClientRect&&(H(o,"transform")!=="none"||r&&H(o,"position")!=="static")){var v=o.getBoundingClientRect();i-=v.top+parseInt(H(o,"border-top-width")),l-=v.left+parseInt(H(o,"border-left-width")),u=i+a.height,s=l+a.width;break}while(o=o.parentNode);if(n&&e!==window){var y=pt(o||e),C=y&&y.a,D=y&&y.d;y&&(i/=D,l/=C,p/=C,c/=D,u=i+c,s=l+p)}return{top:i,left:l,bottom:u,right:s,width:p,height:c}}}function ko(e,t,r){for(var n=We(e,!0),o=pe(e)[t];n;){var a=pe(n)[r],i=void 0;if(i=o>=a,!i)return n;if(n===Be())break;n=We(n,!1)}return!1}function mt(e,t,r,n){for(var o=0,a=0,i=e.children;a<i.length;){if(i[a].style.display!=="none"&&i[a]!==F.ghost&&(n||i[a]!==F.dragged)&&Me(i[a],r.draggable,e,!1)){if(o===t)return i[a];o++}a++}return null}function Jr(e,t){for(var r=e.lastElementChild;r&&(r===F.ghost||H(r,"display")==="none"||t&&!sr(r,t));)r=r.previousElementSibling;return r||null}function Ne(e,t){var r=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==F.clone&&(!t||sr(e,t))&&r++;return r}function xo(e){var t=0,r=0,n=Be();if(e)do{var o=pt(e),a=o.a,i=o.d;t+=e.scrollLeft*a,r+=e.scrollTop*i}while(e!==n&&(e=e.parentNode));return[t,r]}function li(e,t){for(var r in e)if(e.hasOwnProperty(r)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[r][n])return Number(r)}return-1}function We(e,t){if(!e||!e.getBoundingClientRect)return Be();var r=e,n=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var o=H(r);if(r.clientWidth<r.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return Be();if(n||t)return r;n=!0}}while(r=r.parentNode);return Be()}function si(e,t){if(e&&t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function Vr(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var zt;function yo(e,t){return function(){if(!zt){var r=arguments,n=this;r.length===1?e.call(n,r[0]):e.apply(n,r),zt=setTimeout(function(){zt=void 0},t)}}}function ci(){clearTimeout(zt),zt=void 0}function wo(e,t,r){e.scrollLeft+=t,e.scrollTop+=r}function _o(e){var t=window.Polymer,r=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):r?r(e).clone(!0)[0]:e.cloneNode(!0)}function Eo(e,t,r){var n={};return Array.from(e.children).forEach(function(o){var a,i,l,u;if(!(!Me(o,t.draggable,e,!1)||o.animated||o===r)){var s=pe(o);n.left=Math.min((a=n.left)!==null&&a!==void 0?a:1/0,s.left),n.top=Math.min((i=n.top)!==null&&i!==void 0?i:1/0,s.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,s.right),n.bottom=Math.max((u=n.bottom)!==null&&u!==void 0?u:-1/0,s.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var Se="Sortable"+new Date().getTime();function di(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(H(o,"display")==="none"||o===F.ghost)){e.push({target:o,rect:pe(o)});var a=ze({},e[e.length-1].rect);if(o.thisAnimationDuration){var i=pt(o,!0);i&&(a.top-=i.f,a.left-=i.e)}o.fromRect=a}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(li(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var a=!1,i=0;e.forEach(function(l){var u=0,s=l.target,c=s.fromRect,p=pe(s),v=s.prevFromRect,y=s.prevToRect,C=l.rect,D=pt(s,!0);D&&(p.top-=D.f,p.left-=D.e),s.toRect=p,s.thisAnimationDuration&&Vr(v,p)&&!Vr(c,p)&&(C.top-p.top)/(C.left-p.left)===(c.top-p.top)/(c.left-p.left)&&(u=pi(C,v,y,o.options)),Vr(p,c)||(s.prevFromRect=c,s.prevToRect=p,u||(u=o.options.animation),o.animate(s,C,p,u)),u&&(a=!0,i=Math.max(i,u),clearTimeout(s.animationResetTimer),s.animationResetTimer=setTimeout(function(){s.animationTime=0,s.prevFromRect=null,s.fromRect=null,s.prevToRect=null,s.thisAnimationDuration=null},u),s.thisAnimationDuration=u)}),clearTimeout(t),a?t=setTimeout(function(){typeof n=="function"&&n()},i):typeof n=="function"&&n(),e=[]},animate:function(n,o,a,i){if(i){H(n,"transition",""),H(n,"transform","");var l=pt(this.el),u=l&&l.a,s=l&&l.d,c=(o.left-a.left)/(u||1),p=(o.top-a.top)/(s||1);n.animatingX=!!c,n.animatingY=!!p,H(n,"transform","translate3d("+c+"px,"+p+"px,0)"),this.forRepaintDummy=ui(n),H(n,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),H(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){H(n,"transition",""),H(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},i)}}}}function ui(e){return e.offsetWidth}function pi(e,t,r,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-r.top,2)+Math.pow(t.left-r.left,2))*n.animation}var ht=[],Kr={initializeByDefault:!0},Bt={mount:function(t){for(var r in Kr)Kr.hasOwnProperty(r)&&!(r in t)&&(t[r]=Kr[r]);ht.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),ht.push(t)},pluginEvent:function(t,r,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var a=t+"Global";ht.forEach(function(i){r[i.pluginName]&&(r[i.pluginName][a]&&r[i.pluginName][a](ze({sortable:r},n)),r.options[i.pluginName]&&r[i.pluginName][t]&&r[i.pluginName][t](ze({sortable:r},n)))})},initializePlugins:function(t,r,n,o){ht.forEach(function(l){var u=l.pluginName;if(!(!t.options[u]&&!l.initializeByDefault)){var s=new l(t,r,t.options);s.sortable=t,s.options=t.options,t[u]=s,qe(n,s.defaults)}});for(var a in t.options)if(t.options.hasOwnProperty(a)){var i=this.modifyOption(t,a,t.options[a]);typeof i<"u"&&(t.options[a]=i)}},getEventProperties:function(t,r){var n={};return ht.forEach(function(o){typeof o.eventProperties=="function"&&qe(n,o.eventProperties.call(r[o.pluginName],t))}),n},modifyOption:function(t,r,n){var o;return ht.forEach(function(a){t[a.pluginName]&&a.optionListeners&&typeof a.optionListeners[r]=="function"&&(o=a.optionListeners[r].call(t[a.pluginName],n))}),o}};function mi(e){var t=e.sortable,r=e.rootEl,n=e.name,o=e.targetEl,a=e.cloneEl,i=e.toEl,l=e.fromEl,u=e.oldIndex,s=e.newIndex,c=e.oldDraggableIndex,p=e.newDraggableIndex,v=e.originalEvent,y=e.putSortable,C=e.extraEventProperties;if(t=t||r&&r[Se],!!t){var D,f=t.options,k="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!$e&&!Pt?D=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(D=document.createEvent("Event"),D.initEvent(n,!0,!0)),D.to=i||r,D.from=l||r,D.item=o||r,D.clone=a,D.oldIndex=u,D.newIndex=s,D.oldDraggableIndex=c,D.newDraggableIndex=p,D.originalEvent=v,D.pullMode=y?y.lastPutMode:void 0;var x=ze(ze({},C),Bt.getEventProperties(n,t));for(var j in x)D[j]=x[j];r&&r.dispatchEvent(D),f[k]&&f[k].call(t,D)}}var hi=["evt"],Te=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,a=ai(n,hi);Bt.pluginEvent.bind(F)(t,r,ze({dragEl:S,parentEl:se,ghostEl:$,rootEl:ae,nextEl:rt,lastDownEl:cr,cloneEl:ie,cloneHidden:Ye,dragStarted:jt,putSortable:ve,activeSortable:F.active,originalEvent:o,oldIndex:ft,oldDraggableIndex:Rt,newIndex:De,newDraggableIndex:Xe,hideGhostForTarget:Do,unhideGhostForTarget:No,cloneNowHidden:function(){Ye=!0},cloneNowShown:function(){Ye=!1},dispatchSortableEvent:function(l){_e({sortable:r,name:l,originalEvent:o})}},a))};function _e(e){mi(ze({putSortable:ve,cloneEl:ie,targetEl:S,rootEl:ae,oldIndex:ft,oldDraggableIndex:Rt,newIndex:De,newDraggableIndex:Xe},e))}var S,se,$,ae,rt,cr,ie,Ye,ft,De,Rt,Xe,dr,ve,gt=!1,ur=!1,pr=[],nt,Pe,Qr,Zr,Co,So,jt,bt,Ft,qt=!1,mr=!1,hr,ye,en=[],tn=!1,fr=[],gr=typeof document<"u",br=Xr,To=Pt||$e?"cssFloat":"float",fi=gr&&!ho&&!Xr&&"draggable"in document.createElement("div"),Ao=function(){if(gr){if($e)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),Lo=function(t,r){var n=H(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),a=mt(t,0,r),i=mt(t,1,r),l=a&&H(a),u=i&&H(i),s=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+pe(a).width,c=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+pe(i).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&l.float&&l.float!=="none"){var p=l.float==="left"?"left":"right";return i&&(u.clear==="both"||u.clear===p)?"vertical":"horizontal"}return a&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||s>=o&&n[To]==="none"||i&&n[To]==="none"&&s+c>o)?"vertical":"horizontal"},gi=function(t,r,n){var o=n?t.left:t.top,a=n?t.right:t.bottom,i=n?t.width:t.height,l=n?r.left:r.top,u=n?r.right:r.bottom,s=n?r.width:r.height;return o===l||a===u||o+i/2===l+s/2},bi=function(t,r){var n;return pr.some(function(o){var a=o[Se].options.emptyInsertThreshold;if(!(!a||Jr(o))){var i=pe(o),l=t>=i.left-a&&t<=i.right+a,u=r>=i.top-a&&r<=i.bottom+a;if(l&&u)return n=o}}),n},Io=function(t){function r(a,i){return function(l,u,s,c){var p=l.options.group.name&&u.options.group.name&&l.options.group.name===u.options.group.name;if(a==null&&(i||p))return!0;if(a==null||a===!1)return!1;if(i&&a==="clone")return a;if(typeof a=="function")return r(a(l,u,s,c),i)(l,u,s,c);var v=(i?l:u).options.group.name;return a===!0||typeof a=="string"&&a===v||a.join&&a.indexOf(v)>-1}}var n={},o=t.group;(!o||lr(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=r(o.pull,!0),n.checkPut=r(o.put),n.revertClone=o.revertClone,t.group=n},Do=function(){!Ao&&$&&H($,"display","none")},No=function(){!Ao&&$&&H($,"display","")};gr&&!ho&&document.addEventListener("click",function(e){if(ur)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ur=!1,!1},!0);var ot=function(t){if(S){t=t.touches?t.touches[0]:t;var r=bi(t.clientX,t.clientY);if(r){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=r,n.preventDefault=void 0,n.stopPropagation=void 0,r[Se]._onDragOver(n)}}},vi=function(t){S&&S.parentNode[Se]._isOutsideThisEl(t.target)};function F(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=qe({},t),e[Se]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Lo(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(i,l){i.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:F.supportPointer!==!1&&"PointerEvent"in window&&(!Ot||Xr),emptyInsertThreshold:5};Bt.initializePlugins(this,e,r);for(var n in r)!(n in t)&&(t[n]=r[n]);Io(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:fi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Q(e,"pointerdown",this._onTapStart):(Q(e,"mousedown",this._onTapStart),Q(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Q(e,"dragover",this),Q(e,"dragenter",this)),pr.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),qe(this,di())}F.prototype={constructor:F,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(bt=null)},_getDirection:function(t,r){return typeof this.options.direction=="function"?this.options.direction.call(this,t,r,S):this.options.direction},_onTapStart:function(t){if(t.cancelable){var r=this,n=this.el,o=this.options,a=o.preventOnFilter,i=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,u=(l||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||u,c=o.filter;if(Si(n),!S&&!(/mousedown|pointerdown/.test(i)&&t.button!==0||o.disabled)&&!s.isContentEditable&&!(!this.nativeDraggable&&Ot&&u&&u.tagName.toUpperCase()==="SELECT")&&(u=Me(u,o.draggable,n,!1),!(u&&u.animated)&&cr!==u)){if(ft=Ne(u),Rt=Ne(u,o.draggable),typeof c=="function"){if(c.call(this,t,u,this)){_e({sortable:r,rootEl:s,name:"filter",targetEl:u,toEl:n,fromEl:n}),Te("filter",r,{evt:t}),a&&t.preventDefault();return}}else if(c&&(c=c.split(",").some(function(p){if(p=Me(s,p.trim(),n,!1),p)return _e({sortable:r,rootEl:p,name:"filter",targetEl:u,fromEl:n,toEl:n}),Te("filter",r,{evt:t}),!0}),c)){a&&t.preventDefault();return}o.handle&&!Me(s,o.handle,n,!1)||this._prepareDragStart(t,l,u)}}},_prepareDragStart:function(t,r,n){var o=this,a=o.el,i=o.options,l=a.ownerDocument,u;if(n&&!S&&n.parentNode===a){var s=pe(n);if(ae=a,S=n,se=S.parentNode,rt=S.nextSibling,cr=n,dr=i.group,F.dragged=S,nt={target:S,clientX:(r||t).clientX,clientY:(r||t).clientY},Co=nt.clientX-s.left,So=nt.clientY-s.top,this._lastX=(r||t).clientX,this._lastY=(r||t).clientY,S.style["will-change"]="all",u=function(){if(Te("delayEnded",o,{evt:t}),F.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!mo&&o.nativeDraggable&&(S.draggable=!0),o._triggerDragStart(t,r),_e({sortable:o,name:"choose",originalEvent:t}),Ie(S,i.chosenClass,!0)},i.ignore.split(",").forEach(function(c){vo(S,c.trim(),rn)}),Q(l,"dragover",ot),Q(l,"mousemove",ot),Q(l,"touchmove",ot),i.supportPointer?(Q(l,"pointerup",o._onDrop),!this.nativeDraggable&&Q(l,"pointercancel",o._onDrop)):(Q(l,"mouseup",o._onDrop),Q(l,"touchend",o._onDrop),Q(l,"touchcancel",o._onDrop)),mo&&this.nativeDraggable&&(this.options.touchStartThreshold=4,S.draggable=!0),Te("delayStart",this,{evt:t}),i.delay&&(!i.delayOnTouchOnly||r)&&(!this.nativeDraggable||!(Pt||$e))){if(F.eventCanceled){this._onDrop();return}i.supportPointer?(Q(l,"pointerup",o._disableDelayedDrag),Q(l,"pointercancel",o._disableDelayedDrag)):(Q(l,"mouseup",o._disableDelayedDrag),Q(l,"touchend",o._disableDelayedDrag),Q(l,"touchcancel",o._disableDelayedDrag)),Q(l,"mousemove",o._delayedDragTouchMoveHandler),Q(l,"touchmove",o._delayedDragTouchMoveHandler),i.supportPointer&&Q(l,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(u,i.delay)}else u()}},_delayedDragTouchMoveHandler:function(t){var r=t.touches?t.touches[0]:t;Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){S&&rn(S),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;V(t,"mouseup",this._disableDelayedDrag),V(t,"touchend",this._disableDelayedDrag),V(t,"touchcancel",this._disableDelayedDrag),V(t,"pointerup",this._disableDelayedDrag),V(t,"pointercancel",this._disableDelayedDrag),V(t,"mousemove",this._delayedDragTouchMoveHandler),V(t,"touchmove",this._delayedDragTouchMoveHandler),V(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,r){r=r||t.pointerType=="touch"&&t,!this.nativeDraggable||r?this.options.supportPointer?Q(document,"pointermove",this._onTouchMove):r?Q(document,"touchmove",this._onTouchMove):Q(document,"mousemove",this._onTouchMove):(Q(S,"dragend",this),Q(ae,"dragstart",this._onDragStart));try{document.selection?kr(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,r){if(gt=!1,ae&&S){Te("dragStarted",this,{evt:r}),this.nativeDraggable&&Q(document,"dragover",vi);var n=this.options;!t&&Ie(S,n.dragClass,!1),Ie(S,n.ghostClass,!0),F.active=this,t&&this._appendGhost(),_e({sortable:this,name:"start",originalEvent:r})}else this._nulling()},_emulateDragOver:function(){if(Pe){this._lastX=Pe.clientX,this._lastY=Pe.clientY,Do();for(var t=document.elementFromPoint(Pe.clientX,Pe.clientY),r=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Pe.clientX,Pe.clientY),t!==r);)r=t;if(S.parentNode[Se]._isOutsideThisEl(t),r)do{if(r[Se]){var n=void 0;if(n=r[Se]._onDragOver({clientX:Pe.clientX,clientY:Pe.clientY,target:t,rootEl:r}),n&&!this.options.dragoverBubble)break}t=r}while(r=go(r));No()}},_onTouchMove:function(t){if(nt){var r=this.options,n=r.fallbackTolerance,o=r.fallbackOffset,a=t.touches?t.touches[0]:t,i=$&&pt($,!0),l=$&&i&&i.a,u=$&&i&&i.d,s=br&&ye&&xo(ye),c=(a.clientX-nt.clientX+o.x)/(l||1)+(s?s[0]-en[0]:0)/(l||1),p=(a.clientY-nt.clientY+o.y)/(u||1)+(s?s[1]-en[1]:0)/(u||1);if(!F.active&&!gt){if(n&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if($){i?(i.e+=c-(Qr||0),i.f+=p-(Zr||0)):i={a:1,b:0,c:0,d:1,e:c,f:p};var v="matrix(".concat(i.a,",").concat(i.b,",").concat(i.c,",").concat(i.d,",").concat(i.e,",").concat(i.f,")");H($,"webkitTransform",v),H($,"mozTransform",v),H($,"msTransform",v),H($,"transform",v),Qr=c,Zr=p,Pe=a}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!$){var t=this.options.fallbackOnBody?document.body:ae,r=pe(S,!0,br,!0,t),n=this.options;if(br){for(ye=t;H(ye,"position")==="static"&&H(ye,"transform")==="none"&&ye!==document;)ye=ye.parentNode;ye!==document.body&&ye!==document.documentElement?(ye===document&&(ye=Be()),r.top+=ye.scrollTop,r.left+=ye.scrollLeft):ye=Be(),en=xo(ye)}$=S.cloneNode(!0),Ie($,n.ghostClass,!1),Ie($,n.fallbackClass,!0),Ie($,n.dragClass,!0),H($,"transition",""),H($,"transform",""),H($,"box-sizing","border-box"),H($,"margin",0),H($,"top",r.top),H($,"left",r.left),H($,"width",r.width),H($,"height",r.height),H($,"opacity","0.8"),H($,"position",br?"absolute":"fixed"),H($,"zIndex","100000"),H($,"pointerEvents","none"),F.ghost=$,t.appendChild($),H($,"transform-origin",Co/parseInt($.style.width)*100+"% "+So/parseInt($.style.height)*100+"%")}},_onDragStart:function(t,r){var n=this,o=t.dataTransfer,a=n.options;if(Te("dragStart",this,{evt:t}),F.eventCanceled){this._onDrop();return}Te("setupClone",this),F.eventCanceled||(ie=_o(S),ie.removeAttribute("id"),ie.draggable=!1,ie.style["will-change"]="",this._hideClone(),Ie(ie,this.options.chosenClass,!1),F.clone=ie),n.cloneId=kr(function(){Te("clone",n),!F.eventCanceled&&(n.options.removeCloneOnHide||ae.insertBefore(ie,S),n._hideClone(),_e({sortable:n,name:"clone"}))}),!r&&Ie(S,a.dragClass,!0),r?(ur=!0,n._loopId=setInterval(n._emulateDragOver,50)):(V(document,"mouseup",n._onDrop),V(document,"touchend",n._onDrop),V(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",a.setData&&a.setData.call(n,o,S)),Q(document,"drop",n),H(S,"transform","translateZ(0)")),gt=!0,n._dragStartId=kr(n._dragStarted.bind(n,r,t)),Q(document,"selectstart",n),jt=!0,window.getSelection().removeAllRanges(),Ot&&H(document.body,"user-select","none")},_onDragOver:function(t){var r=this.el,n=t.target,o,a,i,l=this.options,u=l.group,s=F.active,c=dr===u,p=l.sort,v=ve||s,y,C=this,D=!1;if(tn)return;function f(R,vt){Te(R,C,ze({evt:t,isOwner:c,axis:y?"vertical":"horizontal",revert:i,dragRect:o,targetRect:a,canSort:p,fromSortable:v,target:n,completed:x,onMove:function(at,it){return vr(ae,r,S,o,at,pe(at),t,it)},changed:j},vt))}function k(){f("dragOverAnimationCapture"),C.captureAnimationState(),C!==v&&v.captureAnimationState()}function x(R){return f("dragOverCompleted",{insertion:R}),R&&(c?s._hideClone():s._showClone(C),C!==v&&(Ie(S,ve?ve.options.ghostClass:s.options.ghostClass,!1),Ie(S,l.ghostClass,!0)),ve!==C&&C!==F.active?ve=C:C===F.active&&ve&&(ve=null),v===C&&(C._ignoreWhileAnimating=n),C.animateAll(function(){f("dragOverAnimationComplete"),C._ignoreWhileAnimating=null}),C!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(n===S&&!S.animated||n===r&&!n.animated)&&(bt=null),!l.dragoverBubble&&!t.rootEl&&n!==document&&(S.parentNode[Se]._isOutsideThisEl(t.target),!R&&ot(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),D=!0}function j(){De=Ne(S),Xe=Ne(S,l.draggable),_e({sortable:C,name:"change",toEl:r,newIndex:De,newDraggableIndex:Xe,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=Me(n,l.draggable,r,!0),f("dragOver"),F.eventCanceled)return D;if(S.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||C._ignoreWhileAnimating===n)return x(!1);if(ur=!1,s&&!l.disabled&&(c?p||(i=se!==ae):ve===this||(this.lastPutMode=dr.checkPull(this,s,S,t))&&u.checkPut(this,s,S,t))){if(y=this._getDirection(t,n)==="vertical",o=pe(S),f("dragOverValid"),F.eventCanceled)return D;if(i)return se=ae,k(),this._hideClone(),f("revert"),F.eventCanceled||(rt?ae.insertBefore(S,rt):ae.appendChild(S)),x(!0);var q=Jr(r,l.draggable);if(!q||wi(t,y,this)&&!q.animated){if(q===S)return x(!1);if(q&&r===t.target&&(n=q),n&&(a=pe(n)),vr(ae,r,S,o,n,a,t,!!n)!==!1)return k(),q&&q.nextSibling?r.insertBefore(S,q.nextSibling):r.appendChild(S),se=r,j(),x(!0)}else if(q&&yi(t,y,this)){var X=mt(r,0,l,!0);if(X===S)return x(!1);if(n=X,a=pe(n),vr(ae,r,S,o,n,a,t,!1)!==!1)return k(),r.insertBefore(S,X),se=r,j(),x(!0)}else if(n.parentNode===r){a=pe(n);var J=0,ne,N=S.parentNode!==r,U=!gi(S.animated&&S.toRect||o,n.animated&&n.toRect||a,y),he=y?"top":"left",ee=ko(n,"top","top")||ko(S,"top","top"),te=ee?ee.scrollTop:void 0;bt!==n&&(ne=a[he],qt=!1,mr=!U&&l.invertSwap||N),J=_i(t,n,a,y,U?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,mr,bt===n);var le;if(J!==0){var be=Ne(S);do be-=J,le=se.children[be];while(le&&(H(le,"display")==="none"||le===$))}if(J===0||le===n)return x(!1);bt=n,Ft=J;var Ee=n.nextElementSibling,de=!1;de=J===1;var Ae=vr(ae,r,S,o,n,a,t,de);if(Ae!==!1)return(Ae===1||Ae===-1)&&(de=Ae===1),tn=!0,setTimeout(xi,30),k(),de&&!Ee?r.appendChild(S):n.parentNode.insertBefore(S,de?Ee:n),ee&&wo(ee,0,te-ee.scrollTop),se=S.parentNode,ne!==void 0&&!mr&&(hr=Math.abs(ne-pe(n)[he])),j(),x(!0)}if(r.contains(S))return x(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){V(document,"mousemove",this._onTouchMove),V(document,"touchmove",this._onTouchMove),V(document,"pointermove",this._onTouchMove),V(document,"dragover",ot),V(document,"mousemove",ot),V(document,"touchmove",ot)},_offUpEvents:function(){var t=this.el.ownerDocument;V(t,"mouseup",this._onDrop),V(t,"touchend",this._onDrop),V(t,"pointerup",this._onDrop),V(t,"pointercancel",this._onDrop),V(t,"touchcancel",this._onDrop),V(document,"selectstart",this)},_onDrop:function(t){var r=this.el,n=this.options;if(De=Ne(S),Xe=Ne(S,n.draggable),Te("drop",this,{evt:t}),se=S&&S.parentNode,De=Ne(S),Xe=Ne(S,n.draggable),F.eventCanceled){this._nulling();return}gt=!1,mr=!1,qt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),nn(this.cloneId),nn(this._dragStartId),this.nativeDraggable&&(V(document,"drop",this),V(r,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ot&&H(document.body,"user-select",""),H(S,"transform",""),t&&(jt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),$&&$.parentNode&&$.parentNode.removeChild($),(ae===se||ve&&ve.lastPutMode!=="clone")&&ie&&ie.parentNode&&ie.parentNode.removeChild(ie),S&&(this.nativeDraggable&&V(S,"dragend",this),rn(S),S.style["will-change"]="",jt&&!gt&&Ie(S,ve?ve.options.ghostClass:this.options.ghostClass,!1),Ie(S,this.options.chosenClass,!1),_e({sortable:this,name:"unchoose",toEl:se,newIndex:null,newDraggableIndex:null,originalEvent:t}),ae!==se?(De>=0&&(_e({rootEl:se,name:"add",toEl:se,fromEl:ae,originalEvent:t}),_e({sortable:this,name:"remove",toEl:se,originalEvent:t}),_e({rootEl:se,name:"sort",toEl:se,fromEl:ae,originalEvent:t}),_e({sortable:this,name:"sort",toEl:se,originalEvent:t})),ve&&ve.save()):De!==ft&&De>=0&&(_e({sortable:this,name:"update",toEl:se,originalEvent:t}),_e({sortable:this,name:"sort",toEl:se,originalEvent:t})),F.active&&((De==null||De===-1)&&(De=ft,Xe=Rt),_e({sortable:this,name:"end",toEl:se,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Te("nulling",this),ae=S=se=$=rt=ie=cr=Ye=nt=Pe=jt=De=Xe=ft=Rt=bt=Ft=ve=dr=F.dragged=F.ghost=F.clone=F.active=null,fr.forEach(function(t){t.checked=!0}),fr.length=Qr=Zr=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":S&&(this._onDragOver(t),ki(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],r,n=this.el.children,o=0,a=n.length,i=this.options;o<a;o++)r=n[o],Me(r,i.draggable,this.el,!1)&&t.push(r.getAttribute(i.dataIdAttr)||Ci(r));return t},sort:function(t,r){var n={},o=this.el;this.toArray().forEach(function(a,i){var l=o.children[i];Me(l,this.options.draggable,o,!1)&&(n[a]=l)},this),r&&this.captureAnimationState(),t.forEach(function(a){n[a]&&(o.removeChild(n[a]),o.appendChild(n[a]))}),r&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,r){return Me(t,r||this.options.draggable,this.el,!1)},option:function(t,r){var n=this.options;if(r===void 0)return n[t];var o=Bt.modifyOption(this,t,r);typeof o<"u"?n[t]=o:n[t]=r,t==="group"&&Io(n)},destroy:function(){Te("destroy",this);var t=this.el;t[Se]=null,V(t,"mousedown",this._onTapStart),V(t,"touchstart",this._onTapStart),V(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(t,"dragover",this),V(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(r){r.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),pr.splice(pr.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ye){if(Te("hideClone",this),F.eventCanceled)return;H(ie,"display","none"),this.options.removeCloneOnHide&&ie.parentNode&&ie.parentNode.removeChild(ie),Ye=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Ye){if(Te("showClone",this),F.eventCanceled)return;S.parentNode==ae&&!this.options.group.revertClone?ae.insertBefore(ie,S):rt?ae.insertBefore(ie,rt):ae.appendChild(ie),this.options.group.revertClone&&this.animate(S,ie),H(ie,"display",""),Ye=!1}}};function ki(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function vr(e,t,r,n,o,a,i,l){var u,s=e[Se],c=s.options.onMove,p;return window.CustomEvent&&!$e&&!Pt?u=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent("move",!0,!0)),u.to=t,u.from=e,u.dragged=r,u.draggedRect=n,u.related=o||t,u.relatedRect=a||pe(t),u.willInsertAfter=l,u.originalEvent=i,e.dispatchEvent(u),c&&(p=c.call(s,u,i)),p}function rn(e){e.draggable=!1}function xi(){tn=!1}function yi(e,t,r){var n=pe(mt(r.el,0,r.options,!0)),o=Eo(r.el,r.options,$),a=10;return t?e.clientX<o.left-a||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-a||e.clientY<n.bottom&&e.clientX<n.left}function wi(e,t,r){var n=pe(Jr(r.el,r.options.draggable)),o=Eo(r.el,r.options,$),a=10;return t?e.clientX>o.right+a||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+a||e.clientX>n.right&&e.clientY>n.top}function _i(e,t,r,n,o,a,i,l){var u=n?e.clientY:e.clientX,s=n?r.height:r.width,c=n?r.top:r.left,p=n?r.bottom:r.right,v=!1;if(!i){if(l&&hr<s*o){if(!qt&&(Ft===1?u>c+s*a/2:u<p-s*a/2)&&(qt=!0),qt)v=!0;else if(Ft===1?u<c+hr:u>p-hr)return-Ft}else if(u>c+s*(1-o)/2&&u<p-s*(1-o)/2)return Ei(t)}return v=v||i,v&&(u<c+s*a/2||u>p-s*a/2)?u>c+s/2?1:-1:0}function Ei(e){return Ne(S)<Ne(e)?1:-1}function Ci(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,r=t.length,n=0;r--;)n+=t.charCodeAt(r);return n.toString(36)}function Si(e){fr.length=0;for(var t=e.getElementsByTagName("input"),r=t.length;r--;){var n=t[r];n.checked&&fr.push(n)}}function kr(e){return setTimeout(e,0)}function nn(e){return clearTimeout(e)}gr&&Q(document,"touchmove",function(e){(F.active||gt)&&e.cancelable&&e.preventDefault()}),F.utils={on:Q,off:V,css:H,find:vo,is:function(t,r){return!!Me(t,r,t,!1)},extend:si,throttle:yo,closest:Me,toggleClass:Ie,clone:_o,index:Ne,nextTick:kr,cancelNextTick:nn,detectDirection:Lo,getChild:mt,expando:Se},F.get=function(e){return e[Se]},F.mount=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(F.utils=ze(ze({},F.utils),n.utils)),Bt.mount(n)})},F.create=function(e,t){return new F(e,t)},F.version=ii;var me=[],Ht,on,an=!1,ln,sn,xr,$t;function Ti(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(r){var n=r.originalEvent;this.sortable.nativeDraggable?Q(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Q(document,"pointermove",this._handleFallbackAutoScroll):n.touches?Q(document,"touchmove",this._handleFallbackAutoScroll):Q(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(r){var n=r.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?V(document,"dragover",this._handleAutoScroll):(V(document,"pointermove",this._handleFallbackAutoScroll),V(document,"touchmove",this._handleFallbackAutoScroll),V(document,"mousemove",this._handleFallbackAutoScroll)),Mo(),yr(),ci()},nulling:function(){xr=on=Ht=an=$t=ln=sn=null,me.length=0},_handleFallbackAutoScroll:function(r){this._handleAutoScroll(r,!0)},_handleAutoScroll:function(r,n){var o=this,a=(r.touches?r.touches[0]:r).clientX,i=(r.touches?r.touches[0]:r).clientY,l=document.elementFromPoint(a,i);if(xr=r,n||this.options.forceAutoScrollFallback||Pt||$e||Ot){cn(r,this.options,l,n);var u=We(l,!0);an&&(!$t||a!==ln||i!==sn)&&($t&&Mo(),$t=setInterval(function(){var s=We(document.elementFromPoint(a,i),!0);s!==u&&(u=s,yr()),cn(r,o.options,s,n)},10),ln=a,sn=i)}else{if(!this.options.bubbleScroll||We(l,!0)===Be()){yr();return}cn(r,this.options,We(l,!1),!1)}}},qe(e,{pluginName:"scroll",initializeByDefault:!0})}function yr(){me.forEach(function(e){clearInterval(e.pid)}),me=[]}function Mo(){clearInterval($t)}var cn=yo(function(e,t,r,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,i=t.scrollSensitivity,l=t.scrollSpeed,u=Be(),s=!1,c;on!==r&&(on=r,yr(),Ht=t.scroll,c=t.scrollFn,Ht===!0&&(Ht=We(r,!0)));var p=0,v=Ht;do{var y=v,C=pe(y),D=C.top,f=C.bottom,k=C.left,x=C.right,j=C.width,q=C.height,X=void 0,J=void 0,ne=y.scrollWidth,N=y.scrollHeight,U=H(y),he=y.scrollLeft,ee=y.scrollTop;y===u?(X=j<ne&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),J=q<N&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):(X=j<ne&&(U.overflowX==="auto"||U.overflowX==="scroll"),J=q<N&&(U.overflowY==="auto"||U.overflowY==="scroll"));var te=X&&(Math.abs(x-o)<=i&&he+j<ne)-(Math.abs(k-o)<=i&&!!he),le=J&&(Math.abs(f-a)<=i&&ee+q<N)-(Math.abs(D-a)<=i&&!!ee);if(!me[p])for(var be=0;be<=p;be++)me[be]||(me[be]={});(me[p].vx!=te||me[p].vy!=le||me[p].el!==y)&&(me[p].el=y,me[p].vx=te,me[p].vy=le,clearInterval(me[p].pid),(te!=0||le!=0)&&(s=!0,me[p].pid=setInterval((function(){n&&this.layer===0&&F.active._onTouchMove(xr);var Ee=me[this.layer].vy?me[this.layer].vy*l:0,de=me[this.layer].vx?me[this.layer].vx*l:0;typeof c=="function"&&c.call(F.dragged.parentNode[Se],de,Ee,e,xr,me[this.layer].el)!=="continue"||wo(me[this.layer].el,de,Ee)}).bind({layer:p}),24))),p++}while(t.bubbleScroll&&v!==u&&(v=We(v,!1)));an=s}},30),Po=function(t){var r=t.originalEvent,n=t.putSortable,o=t.dragEl,a=t.activeSortable,i=t.dispatchSortableEvent,l=t.hideGhostForTarget,u=t.unhideGhostForTarget;if(r){var s=n||a;l();var c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r,p=document.elementFromPoint(c.clientX,c.clientY);u(),s&&!s.el.contains(p)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function dn(){}dn.prototype={startIndex:null,dragStart:function(t){var r=t.oldDraggableIndex;this.startIndex=r},onSpill:function(t){var r=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=mt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(r,o):this.sortable.el.appendChild(r),this.sortable.animateAll(),n&&n.animateAll()},drop:Po},qe(dn,{pluginName:"revertOnSpill"});function un(){}un.prototype={onSpill:function(t){var r=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),r.parentNode&&r.parentNode.removeChild(r),o.animateAll()},drop:Po},qe(un,{pluginName:"removeOnSpill"}),F.mount(new Ti),F.mount(un,dn);function Ai({departments:e,onChange:t}){const[r,n]=we([]),[o,a]=we(e),i=St(null);Ct(()=>{a(e)},[e]);const l=f=>{a(f),t(f)},u=f=>{n(k=>k.includes(f)?k.filter(x=>x!==f):[...k,f])},s=(f,k)=>{const x=[...o];x[f]=k,l(x)},c=()=>{const f={identifier:"",color:"#000000",sort:0,labels:[]};l([...o,f]),n(k=>[...k,o.length])},p=f=>{const k=[...o];k.splice(f,1),l(k),n(x=>x.filter(j=>j!==f))},v=(f,k,x)=>{const j=[...o];j[f].labels[k]=x,l(j)},y=f=>{const k=[...o];k[f].labels.push(""),l(k)},C=(f,k)=>{const x=[...o];x[f].labels.splice(k,1),l(x)},D=(f,k)=>{const x=[...o];x[f][k]===!0?delete x[f][k]:x[f][k]=!0,l(x)};return Ct(()=>{if(!i.current)return;const f=F.create(i.current,{animation:150,handle:".drag-handle",onEnd:k=>{const x=k.oldIndex,j=k.newIndex;if(x===j||x==null||j==null)return;const q=[...o],[X]=q.splice(x,1);q.splice(j,0,X),q.forEach((J,ne)=>{J.sort=ne}),l(q)}});return()=>{f.destroy()}},[o]),d("div",{class:"flex flex-col gap-4 mt-4",children:[d("div",{class:"flex justify-between items-center",children:[d("h3",{class:"text-md",children:"Departments"}),d(K,{onClick:c,children:"Add Department +"})]}),d("div",{ref:i,class:"flex flex-col gap-4",children:o.sort((f,k)=>f.sort-k.sort).map((f,k)=>d(Li,{dept:f,index:k,isOpen:r.includes(k),toggleOpen:()=>u(k),onChange:x=>s(k,x),onDelete:()=>p(k),onLabelChange:(x,j)=>v(k,x,j),onAddLabel:()=>y(k),onDeleteLabel:x=>C(k,x),toggleFlag:x=>D(k,x)},f.identifier+k))})]})}function Li({dept:e,isOpen:t,toggleOpen:r,onChange:n,onDelete:o,onLabelChange:a,onAddLabel:i,onDeleteLabel:l,toggleFlag:u}){return d("div",{class:"bg-gray-700/30 rounded-lg p-4 shadow-xl flex flex-col gap-3",children:[d("div",{class:"flex items-center justify-between select-none",children:[d("div",{class:"flex items-center gap-4 flex-grow cursor-pointer",onClick:r,children:[d(Le,{placeholder:"Identifier",value:e.identifier,onChange:s=>n({...e,identifier:s})}),d(Le,{type:"color",value:e.color,onChange:s=>n({...e,color:s}),isColorInput:!0})]}),d("div",{class:"flex items-center gap-2",children:[d(K,{onClick:s=>{s.stopPropagation()},className:"drag-handle",children:d(uo,{})}),d(K,{variant:"red",onClick:s=>{s.stopPropagation(),o()},children:d(Fe,{})})]})]}),t&&d(Qe,{children:[d("div",{class:"flex gap-4 items-center",children:[d(tt,{enabled:!!e.useless,onClick:()=>u("useless"),children:"Mark as useless"}),d(tt,{enabled:!!e.noFilterButton,onClick:()=>u("noFilterButton"),children:"Remove Filter Button"})]}),d("div",{class:"flex flex-col gap-2",children:[d("div",{class:"flex justify-between items-center",children:[d("span",{class:"font-semibold",children:"Labels"}),d(K,{onClick:i,children:"Add Label +"})]}),e.labels.map((s,c)=>d("div",{class:"flex gap-2 items-center",children:[d(Le,{placeholder:"Label",value:s,onChange:p=>a(c,p)}),d(K,{variant:"red",onClick:()=>l(c),children:d(Fe,{})})]},c))]})]})]})}const Ii=["issue_assigned_to_id","issue_status_id"],Di={issue_assigned_to_id:"Assignees",issue_status_id:"Status"};function Ni(){const e={};return Ii.forEach(t=>{const r=document.getElementById(t);if(!(r instanceof HTMLSelectElement))return;const n=Array.from(r.options).filter(o=>o.value).map(o=>o.innerHTML.trim()).filter(Boolean);n.length&&(e[t]=n)}),e}function Mi({existing:e,onAdd:t}){const r=Oe(Ni,[]),n=Oe(()=>{const o=new Set(e.map(a=>a.trim()));return Object.entries(r).map(([a,i])=>({title:Di[a]||a,labels:i.filter(l=>!o.has(l))})).filter(a=>a.labels.length>0)},[r,e]);return Object.keys(r).length===0?d("p",{class:"text-xs text-gray-400",children:"No suggestions available — open this config on a ticket form page to see the assignee / status options here."}):d("div",{class:"flex flex-col gap-2",children:[d("span",{class:"text-xs text-gray-400",children:"Suggestions (click to add)"}),n.length===0?d("p",{class:"text-xs text-gray-500",children:"All suggestions are already in the whitelist."}):n.map(o=>d("div",{class:"flex flex-col gap-1",children:[d("span",{class:"text-xs text-gray-500",children:o.title}),d("div",{class:"flex flex-wrap gap-1.5",children:o.labels.map(a=>d("button",{type:"button",class:"text-xs! rounded-full! bg-gray-700! hover:bg-green-800! text-white! px-2.5! py-1! cursor-pointer! border-none! shadow-none!",onClick:()=>t(a),children:[a," +"]},a))})]},o.title))]})}const Pi=[{value:"classic",label:"Classic"},{value:"clean-light",label:"Clean light"},{value:"clean-dark",label:"Clean dark"},{value:"clean-auto",label:"Clean auto"}];function Oi({profiles:e,setConfig:t}){const[r,n]=we(0),o=s=>{n(c=>c===s?null:s)},a=()=>{const s={name:"New Profile",addBadgeHighlight:!1,addBgHighlight:!1,addBorderHighlight:!1,departments:[],addPriorityBadge:!1,useTagCloudWhitelist:!1,tagCloudWhitelist:[]};t(c=>({...c,profiles:[...c.profiles,s]})),n(e.length)},i=s=>{t(c=>{const p=[...c.profiles];return p.splice(s,1),{...c,profiles:p}}),r===s&&n(null)},l=Pr((s,c)=>{t(p=>{const v=[...p.profiles];return v[s]={...v[s],name:c},{...p,profiles:v}})},[t]),u=(s,c)=>{t(p=>{const v=[...p.profiles];return v[s]={...v[s],...c},{...p,profiles:v}})};return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex gap-4 justify-between items-center",children:[d("h2",{class:"text-2xl",children:"Edit Profiles"}),d(K,{onClick:a,children:"Add Profile +"})]}),d("div",{class:"space-y-3",children:e.map((s,c)=>d("div",{class:"bg-gray-800 rounded-xl p-4 shadow-md select-none",children:[d("div",{class:"flex justify-between items-center cursor-pointer",onClick:()=>o(c),children:[d(Le,{placeholder:"Profile Name",value:s.name,onChange:p=>l(c,p)}),d("div",{class:"flex gap-2 items-center",children:[so(s)&&d("span",{class:"text-xs text-yellow-400 border border-yellow-700 rounded px-2 py-0.5 whitespace-nowrap",title:"Differs from the team config. Share it via the wiki, or make it LOCAL to keep it for yourself.",children:so(s)==="new"?"not in team config":"edited"}),d(K,{variant:s.local===!0?"green":"gray",title:"Kept out of the shared config, survives updates",onClick:p=>{p.stopPropagation(),!(s.local===!0&&!confirm(`Make "${s.name}" part of the shared config again?

It will no longer be protected from config updates and will be included when you share the config. Requires Save & Reload.`))&&u(c,{local:!s.local})},children:"LOCAL"}),d(K,{onClick:p=>{p.stopPropagation(),i(c)},variant:"red",children:d(Fe,{})})]})]}),r===c&&d(Qe,{children:[d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-2 pt-2",children:[d("span",{className:"text-md",children:"Card Style"}),d("div",{class:"flex flex-wrap gap-2",children:Pi.map(({value:p,label:v})=>d(K,{variant:(s.cardStyle||"classic")===p?"green":"gray",title:p==="clean-auto"?"Follows the light/dark mode of your system":void 0,onClick:()=>u(c,{cardStyle:p}),children:v},p))})]}),d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-3",children:[d("span",{className:"text-md",children:"Tickets Highlighting"}),d(ti,{profile:s,onChange:p=>u(c,p)})]}),d(Ai,{departments:s.departments||[],onChange:p=>u(c,{departments:p})}),d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-2",children:[d("div",{className:"w-fit py-2",children:d(tt,{enabled:s.useTagCloudWhitelist===!0,onClick:()=>u(c,{useTagCloudWhitelist:!s.useTagCloudWhitelist}),children:"Use Tag Cloud Whitelist"})}),s.useTagCloudWhitelist===!0&&d("div",{class:"grid grid-cols-3 gap-2",children:[(s.tagCloudWhitelist||[]).map((p,v)=>d("div",{class:"flex gap-2 items-center",children:[d(Le,{fullWidth:!0,placeholder:"Option label",value:p,onChange:y=>{const C=[...s.tagCloudWhitelist||[]];C[v]=y,u(c,{tagCloudWhitelist:C})}}),d(K,{variant:"red",onClick:()=>{const y=[...s.tagCloudWhitelist||[]];y.splice(v,1),u(c,{tagCloudWhitelist:y})},children:d(Fe,{})})]},v)),d(K,{onClick:()=>{const p=[...s.tagCloudWhitelist||[],""];u(c,{tagCloudWhitelist:p})},children:"Add Option +"})]}),s.useTagCloudWhitelist===!0&&d(Mi,{existing:s.tagCloudWhitelist||[],onAdd:p=>{const v=[...s.tagCloudWhitelist||[],p];u(c,{tagCloudWhitelist:v})}})]})]})]},c))})]})}const Oo="dynamic-kanban-config";function zo(){const t=new URLSearchParams(window.location.search).get("query_id");return t||(document.querySelector("tr.group.swimlane")?"default-board":null)}function zi(){return document.querySelector("h2")?.textContent?.trim()||""}function Bi(){const e=zo();if(!e)return;let t;try{const i=localStorage.getItem(Oo);t=i?JSON.parse(i):structuredClone(At)}catch{return}if(!t||typeof t!="object")return;const r=Array.isArray(t.swimlanes)?t.swimlanes:[],n=r.filter(i=>i.boardId===e).sort((i,l)=>i.sort-l.sort),o=zi();let a=!1;Array.from(document.querySelectorAll("tr.group.swimlane")).forEach((i,l)=>{const u=i.getAttribute("data-id")||`swimlane-${l}`;if(n.find(c=>c.identifier===u))return;const s=i.querySelector('a[href^="/projects/"]')?.textContent?.trim()||u;n.push({identifier:u,name:s,sort:n.length,boardId:e,boardName:o}),a=!0}),o&&n.forEach(i=>{i.boardName!==o&&(i.boardName=o,a=!0)}),a&&(t.swimlanes=[...r.filter(i=>i.boardId!==e),...n],localStorage.setItem(Oo,JSON.stringify(t)))}function Ri({swimlanes:e,swimlaneGroups:t,setConfig:r}){const n=Oe(zo,[]),[o,a]=we(n),i=St(null),l=Oe(()=>{const f=new Map;return(e||[]).forEach(k=>{f.has(k.boardId)||f.set(k.boardId,k.boardName||"")}),Array.from(f.entries()).map(([k,x])=>({id:k,name:x}))},[e]);Ct(()=>{(o===null||!l.find(f=>f.id===o))&&l.length>0&&a(l.find(f=>f.id===n)?.id||l[0].id)},[l,o,n]);const u=Oe(()=>(e||[]).filter(f=>f.boardId===o).sort((f,k)=>f.sort-k.sort),[e,o]),s=Oe(()=>(t||[]).filter(f=>f.boardId===o),[t,o]),c=Oe(()=>{const f=[];s.forEach(x=>{const j=u.filter(X=>(x.laneIdentifiers||[]).includes(X.identifier)),q=j.length?Math.min(...j.map(X=>X.sort)):x.sort??Number.MAX_SAFE_INTEGER;f.push({anchor:q,item:{type:"group",key:`group-${x.id}`,group:x,lanes:j}})});const k=new Set(s.flatMap(x=>x.laneIdentifiers||[]));return u.forEach(x=>{k.has(x.identifier)||f.push({anchor:x.sort,item:{type:"lane",key:`lane-${x.identifier}`,lane:x}})}),f.sort((x,j)=>x.anchor-j.anchor),f.map(x=>x.item)},[u,s]),p=f=>{r(k=>({...k,swimlanes:(k.swimlanes||[]).filter(x=>x.boardId!==f),swimlaneGroups:(k.swimlaneGroups||[]).filter(x=>x.boardId!==f)})),o===f&&a(null)},v=()=>{o&&r(f=>({...f,swimlaneGroups:[...f.swimlaneGroups||[],{id:`group-${Date.now()}`,name:"Neue Gruppe",boardId:o,laneIdentifiers:[],sort:u.length}]}))},y=(f,k)=>{r(x=>({...x,swimlaneGroups:(x.swimlaneGroups||[]).map(j=>j.id===f?{...j,name:k}:j)}))},C=f=>{r(k=>({...k,swimlaneGroups:(k.swimlaneGroups||[]).filter(x=>x.id!==f)}))};Ct(()=>{const f=i.current;if(!f||!o)return;const k=()=>{const q=new Map(u.map(N=>[N.identifier,N])),X=[],J=new Map,ne=new Map;return Array.from(f.children).forEach(N=>{const U=N.getAttribute("data-lane-id");if(U){const le=q.get(U);le&&X.push(le);return}const he=N.getAttribute("data-group-id");if(!he)return;ne.set(he,X.length);const ee=N.querySelector("[data-group-body]"),te=Array.from(ee?.children||[]).map(le=>le.getAttribute("data-lane-id")).filter(le=>!!le);J.set(he,te),te.forEach(le=>{const be=q.get(le);be&&X.push(be)})}),{lanes:X.map((N,U)=>({...N,sort:U})),groupMembers:J,groupSorts:ne}},x=q=>{const{lanes:X,groupMembers:J,groupSorts:ne}=k(),{item:N,from:U,oldIndex:he}=q;N&&U&&(N.remove(),U.insertBefore(N,U.children[he]??null)),r(ee=>({...ee,swimlanes:[...(ee.swimlanes||[]).filter(te=>te.boardId!==o),...X],swimlaneGroups:(ee.swimlaneGroups||[]).map(te=>J.has(te.id)?{...te,laneIdentifiers:J.get(te.id),sort:ne.get(te.id)}:te)}))},j=[];return j.push(F.create(f,{animation:150,handle:".drag-handle",filter:"input, button",preventOnFilter:!1,fallbackOnBody:!0,swapThreshold:.65,group:{name:"swimlanes",put:(q,X,J)=>J.hasAttribute("data-lane-id")},onEnd:x})),f.querySelectorAll("[data-group-body]").forEach(q=>{j.push(F.create(q,{animation:150,handle:".drag-handle",filter:"input, button",preventOnFilter:!1,fallbackOnBody:!0,swapThreshold:.65,group:{name:"swimlanes",put:(X,J,ne)=>ne.hasAttribute("data-lane-id")},onEnd:x}))}),()=>j.forEach(q=>q.destroy())},[c,o,u]);const D=f=>d("div",{"data-lane-id":f.identifier,class:"bg-gray-800 rounded-xl p-4 flex justify-between items-center drag-handle cursor-pointer",children:[d("span",{class:"font-semibold",children:f.name}),d("span",{class:"text-sm text-gray-400",children:f.identifier})]},`lane-${f.identifier}`);return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex justify-between items-center gap-4",children:[d("span",{class:"text-2xl",children:"Sort Swimlanes"}),d(K,{onClick:v,children:"Add Group +"})]}),l.length>0&&d("div",{class:"flex flex-wrap items-center gap-2 border-b border-gray-700 pb-3",children:l.map(f=>d("div",{class:"flex items-center gap-1",children:[d(K,{variant:f.id===o?"green":"gray",onClick:()=>a(f.id),children:d("span",{class:"flex items-center gap-2",children:[f.name||`Board ${f.id}`,f.id===n&&d("span",{class:"w-2 h-2 rounded-full bg-blue-400",title:"You are on this board"})]})}),d(K,{variant:"red",onClick:()=>p(f.id),children:d(Fe,{})})]},f.id))}),l.length===0?d("p",{class:"text-xs text-gray-400",children:"No boards collected yet — boards are registered automatically as soon as you visit them."}):d("div",{ref:i,class:"flex flex-col gap-3",children:c.map(f=>f.type==="lane"?D(f.lane):d("div",{"data-group-id":f.group.id,class:"bg-gray-800/50 rounded-xl p-3 flex flex-col gap-2",children:[d("div",{class:"flex justify-between items-center gap-2",children:[d("div",{class:"relative flex-1 min-w-0",children:[d("input",{class:"peer w-full bg-transparent rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:bg-gray-800",value:f.group.name,onInput:k=>y(f.group.id,k.currentTarget.value)}),d("span",{class:"absolute inset-y-0 left-2 max-w-full overflow-hidden flex items-center gap-1.5 pointer-events-none peer-focus:hidden",children:[d("span",{class:"invisible text-sm font-semibold whitespace-pre",children:f.group.name}),d("span",{class:"text-gray-500 shrink-0",children:d(Qa,{})})]})]}),d("span",{class:"drag-handle cursor-grab text-gray-400 hover:text-white p-1",children:d(uo,{})}),d(K,{variant:"red",onClick:()=>C(f.group.id),children:d(Fe,{})})]}),d("div",{"data-group-body":!0,class:"flex flex-col gap-2 rounded-lg p-1",style:"min-height: 3rem;",children:[f.lanes.map(k=>D(k)),f.lanes.length===0&&d("p",{class:"text-xs text-gray-500 text-center pointer-events-none py-2",children:"Drag swimlanes here"})]})]},f.key))})]})}const Bo="dynamic-kanban-env";function ji(){try{const e=localStorage.getItem(Bo),t=e?JSON.parse(e):{};return Object.entries(t).map(([r,n])=>({key:r,value:String(n)}))}catch{return[]}}function Fi(e){const t={};e.forEach(({key:r,value:n})=>{r.trim()&&(t[r.trim()]=n)}),localStorage.setItem(Bo,JSON.stringify(t))}function qi(){const[e,t]=we(ji),r=i=>{t(i),Fi(i)},n=(i,l,u)=>{r(e.map((s,c)=>c===i?{...s,[l]:u}:s))},o=()=>{r([...e,{key:"",value:""}])},a=i=>{r(e.filter((l,u)=>u!==i))};return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex justify-between items-center gap-4",children:[d("span",{class:"text-2xl",children:"Env Variables"}),d(K,{onClick:o,children:"Add Variable +"})]}),d("p",{class:"text-xs text-gray-400",children:["Env variables are stored locally and are ",d("b",{children:"not"})," part of the shared config. Use"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:"{{KEY}}"})," ","anywhere in the config (e.g."," ",d("code",{class:"bg-gray-800 px-1 rounded",children:'"labels": ["{{ME_NAME}}"]'}),") — it is replaced with your local value when the board loads. Changes take effect after a reload."]}),d("div",{class:"flex flex-col gap-2",children:[e.map((i,l)=>d("div",{class:"flex items-center gap-2",children:[d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm font-mono w-48 outline-none",placeholder:"KEY",value:i.key,onInput:u=>n(l,"key",u.currentTarget.value)}),d("span",{class:"text-gray-500",children:"="}),d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex-1 outline-none",placeholder:"Value",value:i.value,onInput:u=>n(l,"value",u.currentTarget.value)}),d(K,{variant:"red",onClick:()=>a(l),children:d(Fe,{})})]},l)),e.length===0&&d("p",{class:"text-xs text-gray-500",children:["No variables yet — e.g. add"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:"ME_NAME"})," ","with your own name."]})]})]})}const Ro={none:{dot:"bg-gray-500",text:"No team config set"},synced:{dot:"bg-green-500",text:"In sync with team config"},edited:{dot:"bg-yellow-500",text:"Your config differs from the team config"},updates:{dot:"bg-yellow-500",text:"Team config has updates, but you have own changes"}};function Hi(){const[e,t]=we(Lt),[r,n]=we(Lt),[o,a]=we(""),[i,l]=we(!1),[u,s]=we(no),c=e.trim(),p=qa(),v=r?Xa():"none",y=async()=>{if(c){l(!0),a("");try{await io(c,!0),ro(c),location.reload()}catch(f){a(f.message),l(!1)}}},C=()=>{confirm("Discard your changes and use the team config?")&&(Ya(),location.reload())};return d("div",{class:"flex flex-col gap-4",children:[d("span",{class:"text-2xl",children:"Team Config"}),d("div",{class:"flex items-center gap-2",children:[d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex-1 min-w-0 outline-none focus:bg-gray-700",placeholder:"https://…/Kanban-Config.txt",value:e,onInput:f=>t(f.currentTarget.value),onKeyDown:f=>f.key==="Enter"&&y()}),d(K,{variant:"green",disabled:i||!c,onClick:y,children:i?"Loading…":"Load"}),r&&d(K,{variant:"red",onClick:()=>{ro(""),t(""),n(""),s(""),a("")},children:"Remove"})]}),d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm outline-none focus:bg-gray-700",placeholder:Ur(c)?`Edit link: ${Ur(c)}`:"Edit link (optional) — where the config is changed, shown in Raw Edit",value:u,onInput:f=>{const k=f.currentTarget.value;s(k),Ha(k.trim())}}),d("div",{class:"flex items-center gap-2 text-xs",children:[d("span",{class:`size-2 rounded-full ${o?"bg-red-500":Ro[v].dot}`}),o?d("span",{class:"text-red-400",children:["Could not load: ",o]}):d("span",{class:"text-gray-400",children:[Ro[v].text,r&&p&&` · last synced ${p.toLocaleString("de-DE",{dateStyle:"short",timeStyle:"short"})}`]}),!o&&(v==="edited"||v==="updates")&&d(K,{className:"ml-auto",onClick:C,children:v==="updates"?"Discard mine & update":"Reset to team config"})]}),d("details",{class:"mt-2 bg-gray-800/50 rounded-lg px-4 py-3 text-xs text-gray-300",open:!r,children:[d("summary",{class:"cursor-pointer text-sm text-white select-none",children:"How it works"}),d("ol",{class:"list-decimal pl-4 mt-3 flex flex-col gap-2",children:[d("li",{children:["Put the config JSON where the board can read it: a"," ",d("b",{children:"Redmine wiki page"})," (use the link with"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:".txt"})," at the end), a"," ",d("b",{children:"GitHub Gist"})," or a ",d("b",{children:"GitHub file"}),' (the "Raw" link, without the commit hash).']}),d("li",{children:["Paste the link above and click ",d("b",{children:"Load"}),"."]}),d("li",{children:["The config refreshes on every page load. Your own changes are kept and marked yellow — ",d("b",{children:"Reset to team config"})," discards them."]}),d("li",{children:["To share your changes: ",d("b",{children:"Save & Reload"})," → ",d("b",{children:"Raw Edit"})," →"," ",d("b",{children:"Copy"})," → paste it at the edit link."]}),d("li",{children:["Personal settings go in ",d("b",{children:"Env"})," and ",d("b",{children:"LOCAL"})," profiles — the team config never overwrites them."]})]})]})]})}function $i({config:e,setConfig:t,currentEditorTab:r}){return d("div",{class:"h-full overflow-y-auto flex flex-col gap-5 custom-slider",children:[r=="profiles"&&d(Oi,{profiles:e.profiles,setConfig:t}),r=="tags"&&d(ei,{tags:e.tags,setConfig:t}),r=="dynamicTags"&&d(Za,{dynamicTags:e.dynamicTags,setConfig:t}),r=="swimlanes"&&d(Ri,{swimlanes:e.swimlanes,swimlaneGroups:e.swimlaneGroups,setConfig:t}),r=="env"&&d(qi,{}),r=="team"&&d(Hi,{})]})}function Gi({rawText:e,handleRawChange:t,config:r}){const n=$a(),o=St(null),a=()=>{navigator.clipboard.writeText(e)},i=async()=>{const l=await navigator.clipboard.readText();if(o.current){o.current.value=l;const u=new Event("input",{bubbles:!0,cancelable:!0});o.current.dispatchEvent(u)}};return d("div",{class:"flex flex-col gap-2 w-full h-full",children:[lo(r)&&d("div",{class:"flex items-center gap-2 text-xs text-yellow-400 border border-yellow-700 rounded px-3 py-2",children:[d("span",{class:"size-2 rounded-full bg-yellow-500 shrink-0"}),d("span",{children:["Differs from the team config. To share it: Save, Copy and paste it into the"," ",n?d("a",{href:n,target:"_blank",class:"!text-yellow-300 underline",children:"team config"}):"team config","."]})]}),d("div",{class:"relative w-full flex-1 min-h-0",children:[d("div",{class:"absolute top-2 right-2 flex gap-2 z-10",children:[d(K,{onClick:a,children:"Copy"}),d(K,{onClick:i,children:"Paste"})]}),d("textarea",{id:"config",ref:o,class:"!w-full !h-full !resize-none !max-h-full !text-md !p-2 !border-2 !text-white !rounded !bg-gray-900 !border-gray-700 !border-dashed focus:!outline-none focus:!border-gray-500",rows:20,value:e,onInput:t})]})]})}function Ui(){const[e,t,r,n,o]=Ka(),[a,i]=we(!1),[l,u]=we(JSON.stringify(Mt(e),null,4)),[s,c]=we("profiles"),p=y=>{const C=y.currentTarget.value;u(C);try{const D=JSON.parse(C);t(Yr(D))}catch{console.warn("Invalid JSON.")}},v=()=>{a||u(JSON.stringify(Mt(e),null,4)),i(!a)};return d(Fa,{children:[d("div",{class:"flex flex-col gap-2 mb-4",children:[d("div",{class:"flex flex-wrap gap-2 items-center",children:[d(K,{variant:s==="profiles"?"green":"gray",onClick:()=>c("profiles"),children:"Profiles"}),d(K,{variant:s==="tags"?"green":"gray",onClick:()=>c("tags"),children:"Tags"}),d(K,{variant:s==="dynamicTags"?"green":"gray",onClick:()=>c("dynamicTags"),children:"Dynamic Tags"}),d(K,{variant:s==="swimlanes"?"green":"gray",onClick:()=>c("swimlanes"),children:"Swimlanes"}),d(K,{variant:s==="env"?"green":"gray",onClick:()=>c("env"),children:"Env"}),d(K,{variant:s==="team"?"green":"gray",onClick:()=>c("team"),children:d("span",{class:"flex items-center gap-1.5",children:["Team Config",lo(e)&&d("span",{class:"size-2 rounded-full bg-yellow-500",title:"Differs from the team config"})]})}),d("span",{class:"ml-auto text-sm px-3 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700 select-none whitespace-nowrap",children:["v","5.11.3"]})]}),d("div",{class:"flex gap-2",children:[d(K,{onClick:n,variant:"red",children:"Reset"}),d(K,{onClick:v,children:a?"Done":"Raw Edit"}),d(K,{disabled:!o,onClick:r,variant:o?"green":"gray",children:"Save & Reload"})]})]}),a?d(Gi,{rawText:l,handleRawChange:p,config:e}):d($i,{config:e,setConfig:t,currentEditorTab:s})]})}function Wi(){window.__KANBAN_DEFAULT_CONFIG__=At,Bi(),Ja();let e=document.getElementById("app");e||(e=document.createElement("div"),e.id="app",document.body.appendChild(e)),Qo(d(Ui,{}),e)}function Yi(){const e="kanban_active_filters",t="dynamic-kanban-config",r="dynamic-kanban-env",n="dynamic-kanban-local-profiles",o=window.__KANBAN_DEFAULT_CONFIG__,a=localStorage.getItem(t);function i(){try{return JSON.parse(localStorage.getItem(r))||{}}catch{return{}}}function l(m){const h=i();return m.replace(/\{\{\s*([\w.-]+)\s*\}\}/g,(b,g)=>g in h?String(h[g]).replace(/\\/g,"\\\\").replace(/"/g,'\\"'):b)}function u(){try{const m=localStorage.getItem(n),h=m?JSON.parse(l(m)):[];return Array.isArray(h)?h:[]}catch{return[]}}let s;try{const m=a||JSON.stringify(o);if(s=JSON.parse(l(m)),typeof s!="object"||s===null)throw new Error("Parsed config is not an object")}catch(m){console.warn("Invalid config in localStorage, falling back to defaultConfig:",m),s=o}u().forEach(m=>{s.profiles=s.profiles||[];const h=s.profiles.findIndex(b=>b.name===m.name);h>=0?s.profiles[h]=m:s.profiles.push(m)}),a||localStorage.setItem(t,JSON.stringify(o));let c=C()||{user:"",focus:"",filters:[],tagFilters:[],activeButton:null,totalTickets:0,displayedTickets:0,uselessOpacity:.2,currentProfileIndex:0,highPrio:!1};const p={name:"",addBgHighlight:!1,addBadgeHighlight:!1,addBorderHighlight:!1,addPriorityBadge:!1,useTagCloudWhitelist:!1,tagCloudWhitelist:[],departments:[],cardStyle:"classic"};Array.isArray(s.profiles)||(s.profiles=[]),s.profiles[c.currentProfileIndex]||(c.currentProfileIndex=0,y());let v={...p,...s.profiles[c.currentProfileIndex]||{}};Array.isArray(v.departments)||(v.departments=[]),Array.isArray(c.tagFilters)||(c.tagFilters=[]),Array.isArray(c.filters)||(c.filters=[]);function y(){localStorage.setItem(e,JSON.stringify(c))}function C(){const m=localStorage.getItem(e);return m?JSON.parse(m):null}D();function D(){hn()&&Er(v.cardStyle||"classic"),document.querySelector(".agile-board")&&(document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity),f(),k(),Gt(),Ki(),Qi(),Je(),tl(),pn(),wr(),nl(),x());const h=document.querySelector("#issue-form");if(!h)return;al(),Ho();const b=new MutationObserver(()=>{Ho()});h&&b.observe(h,{childList:!0,subtree:!0})}function f(){const m=`
            .agile-board .issue-card.highlight-border {
                border: solid 3px var(--border-color) !important;
                border-radius: 5px;
            }
            .agile-board .issue-card.highlight-background {
                background-color: color-mix(in srgb, var(--border-color) 20%, white 80%) !important;
            }
            .agile-board .issue-card.highlight-badge {
                position: relative;
                overflow: visible;
            }
            .agile-board .issue-card.highlight-badge::after {
                --f: 0.5em; /* folded part */
                --r: 0.8em; /* ribbon shape */
                --c: var(--border-color);

                content: attr(data-department);
                position: absolute;
                top: 10px;
                right: calc(-1 * var(--f));
                font-size: 12px;
                font-weight: bold;
                color: #fff;
                line-height: 1.8;
                padding-inline: .7em;
                background: var(--c);
                border-bottom: var(--f) solid rgba(0,0,0,0.33);
                border-left: var(--r) solid transparent;
                clip-path:
                    polygon(
                        0 0,
                        100% 0,
                        100% calc(100% - var(--f)),
                        calc(100% - var(--f)) 100%,
                        calc(100% - var(--f)) calc(100% - var(--f)),
                        0 calc(100% - var(--f)),
                        var(--r) calc(50% - var(--f) / 2)
                    );
                pointer-events: none;
                white-space: nowrap;
                z-index: 2;
            }
            .issue-card .fields .name a {
                color: color-mix(in srgb, var(--border-color) 30%, black 70%) !important;
            }
            .contextual {
                padding-right: 20px;
                display: flex;
                gap: 15px;
            }
            .contextual button[name="board-filter"].active {
                background-color: var(--border-color) !important;
                color: white !important;
                font-weight: bold !important;
            }
            .contextual .tag-filter-menu {
                position: relative;
            }
            .contextual .tag-filter-menu-panel {
                position: absolute;
                top: 36px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 30;
                min-width: 360px;
                max-width: 560px;
                max-height: 360px;
                overflow-y: auto;
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                padding: 8px;
                border: 2px solid rgb(209, 211, 224);
                border-radius: 8px;
                background: rgb(249, 250, 251);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
            .contextual .tag-filter-menu-panel[hidden] {
                display: none;
            }
            .contextual .tag-filter-menu-panel button {
                white-space: nowrap;
            }
            .contextual button[name="board-filter"].tag-filter-button.active {
                color: white !important;
            }
            .contextual .input-container {
                display: inline-block;
                position: relative;
            }
            .contextual .clear-button {
                display: inline-block;
                position: relative;
                left: -20px;
                font-weight: bold;
                cursor: pointer;
                margin-right: -10px;
            }
            .contextual .clear-button:hover {
                color: black !important;
            }
            .contextual #ticket-info {
                white-space: nowrap;
            }
            .semi-old {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 70px;
            }
            .too-old {
                position: absolute;
                top: 0;
                left: 0;
                width: 55px;
                rotate: 180deg;
            }
            input.live_search_field {
                border: 1px #d1d3e0 solid;
                border-radius: 2px;
                height: 28px;
                padding: 10px;
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
                outline: none;
            }
            button[name="board-filter"] {
                border: 2px solid;
            }
            button[name="reset-button"] {
                border: 2px solid;
            }
            button[name="board-filter"], button[name="reset-button"] {
                position: relative;
                border-radius: 5px;
                height: 28px;
                font-family: monospace;
                outline: none;
                background-color: rgb(249, 250, 251);
                box-shadow: none;
                color: black;
                padding: 0 .5em;
                cursor: pointer;
            }
            :root {
                --useless-opacity: 0.3;
            }
            .issue-card.useless {
                opacity: var(--useless-opacity);
            }
            .tag-cloud-buttons button.selected {
                background-color: #d0eaff;
                font-weight: bold;
            }
            .tag-label-color a{
                background: var(--tag-color) !important;
            }
			.createNewTicket {
				height: 18px;
				border-radius: 3px;
				background-color: black;
				color: white !important;
				padding: 1px 6px;
				border: 0;
                margin-left: 4px;
			}
            .createNewTicketMenu {
                position: relative;
                display: inline-block;
                margin-left: 4px;
            }
            .createNewTicketMenu .createNewTicket {
                margin-left: 0;
            }
            .createNewTicketMenuPanel {
                position: absolute;
                top: calc(100% + 4px);
                left: 0;
                z-index: 40;
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 220px;
                max-width: 320px;
                padding: 8px;
                border: 2px solid rgb(209, 211, 224);
                border-radius: 8px;
                background: rgb(249, 250, 251);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
            .createNewTicketMenuPanel[hidden] {
                display: none;
            }
            .createNewTicketMenuPanel a {
                display: block;
                padding: 4px 8px;
                border-radius: 4px;
                background: #111827;
                color: white !important;
                text-decoration: none;
                white-space: nowrap;
            }
            .createNewTicketMenuPanel a:hover {
                background: #374151;
            }
			.agile-board .issue-card.prio-badge {
				position: relative;
			}
			.agile-board .issue-card.prio-badge::before {
				--f: 0.5em;
				--r: 0.8em;
				--c: var(--prio-color);

				content: attr(data-prio);
				position: absolute;
				top: 10px;
				left: calc(-1 * var(--f));
				font-size: 12px;
				font-weight: bold;
				color: #fff;
				line-height: 2;
				padding-inline: .7em;
				background: var(--c);
				border-bottom: var(--f) solid rgba(0,0,0,0.33);
				border-right: var(--r) solid transparent;
				clip-path:
					polygon(0 0,0 calc(100% - var(--f)),var(--f) 100%,
					var(--f) calc(100% - var(--f)),100% calc(100% - var(--f)),
					calc(100% - var(--r)) calc(50% - var(--f)/2),100% 0);
				pointer-events: none;
				white-space: nowrap;
				z-index: 2;
			}
        `,h=document.createElement("style");h.type="text/css",h.innerText=m,document.head.appendChild(h)}function k(){Er(v.cardStyle||"classic")}function x(){if(!document.documentElement.classList.contains("dk-clean"))return;const m=document.querySelector(".agile-board");if(!m||(m.querySelectorAll(".issue-card").forEach(X),m.querySelectorAll("tr.group.swimlane td").forEach(ee),le(),be(),R(),x.installed))return;x.installed=!0,new MutationObserver(()=>{m.querySelectorAll(".issue-card:not(.dk-has-compact)").forEach(X)}).observe(m,{childList:!0,subtree:!0});let h=null;m.addEventListener("mousedown",g=>{h={x:g.clientX,y:g.clientY}},!0);const b=g=>{const _=g.target.closest(".issue-card.dk-has-compact");if(!_||!_.dataset.href)return;const E=h&&Math.hypot(g.clientX-h.x,g.clientY-h.y)>4,A=g.target.closest(".dk-id");if(A&&g.type==="click"&&g.button===0&&!E){g.preventDefault(),g.stopPropagation(),j(A);return}g.type==="click"&&g.button!==0||g.type==="auxclick"&&g.button!==1||h&&Math.hypot(g.clientX-h.x,g.clientY-h.y)>4||(g.preventDefault(),g.stopPropagation(),window.open(_.dataset.href,"_blank","noopener"))};m.addEventListener("click",b,!0),m.addEventListener("auxclick",b,!0)}function j(m){const h=m.dataset.number||m.textContent;m.dataset.number=h;const b=()=>{m.textContent="Kopiert ✓",m.classList.add("dk-copied"),clearTimeout(m._copyTimer),m._copyTimer=setTimeout(()=>{m.textContent=h,m.classList.remove("dk-copied")},1200)};navigator.clipboard?.writeText?navigator.clipboard.writeText(h).then(b,()=>q(h)&&b()):q(h)&&b()}function q(m){const h=document.createElement("textarea");h.value=m,h.style.position="fixed",h.style.opacity="0",document.body.append(h),h.select();let b=!1;try{b=document.execCommand("copy")}catch{b=!1}return h.remove(),b}function X(m){m.querySelector(":scope > .dk-compact")?.remove();const h=m.querySelector(".name a")||m.querySelector('a[href*="/issues/"]');if(!h)return;m.dataset.href=h.href;const b=h.textContent.trim(),g=b.match(/^#?(\d+)\s*:?\s*([\s\S]*)$/),_=(h.getAttribute("href").match(/issues\/(\d+)/)||[])[1],E=g?g[1]:_,A=g?g[2]:b,T=(oe,xe)=>{const Z=document.createElement("span");return Z.className=oe,xe!=null&&(Z.textContent=xe),Z},L=T("dk-head");if(E){const oe=T("dk-id",`#${E}`);oe.title="Ticketnummer kopieren",L.append(oe)}const w=m.querySelector(".project")?.textContent.trim();w&&L.append(T("dk-project",w));const I=T("dk-foot");m.querySelectorAll(".tag-label-color").forEach(oe=>{const xe=oe.textContent.trim(),Z=T("dk-tag",xe);Z.title=xe,Z.style.setProperty("--tag-color",U(oe,xe)),I.append(Z)});const M=T("dk-bottom"),W=m.querySelector(".user")?.textContent.trim();M.append(T("dk-user",W||""));const z=vt(m),B=he(m);if(B>=14){const oe=T(B>=30?"dk-age dk-age-old":"dk-age");oe.title=`Seit ${B} Tagen in diesem Status${z?` · aktualisiert ${z}`:""}`,oe.innerHTML=J(),oe.append(`${B} T`),M.append(oe)}else z&&M.append(T("dk-updated",z));const G=T("dk-compact");G.append(L,T("dk-title",A)),I.childNodes.length&&G.append(I),G.append(M),m.prepend(G),m.classList.add("dk-has-compact")}function J(){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>'}function ne(){return'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.4 5.2A9.5 9.5 0 0 1 12 5c4.5 0 8.2 3 9.5 7a10.6 10.6 0 0 1-2.6 4"/><path d="M6.6 6.6A10.6 10.6 0 0 0 2.5 12c1.3 4 5 7 9.5 7a9.7 9.7 0 0 0 5.4-1.6"/></svg>'}function N(){return["#378ADD","#1D9E75","#D85A30","#D4537E","#7F77DD","#BA7517","#639922","#5D6D7E"]}function U(m,h){const b=m.style.getPropertyValue("--tag-color")||m.style.backgroundColor||m.querySelector("a")?.style.backgroundColor;if(b)return b;let g=0;for(const _ of h.toLowerCase())g=g*31+_.charCodeAt(0)|0;return N()[Math.abs(g)%N().length]}function he(m){const h=m.textContent.match(/Zeit seit letzter Status-Änderung:\s*(\d+)\s*Tag/);return h?parseInt(h[1],10):0}function ee(m){if(m.querySelector(":scope > .dk-lane-head"))return;const h=document.createElement("div");h.className="dk-lane-head";const b=document.createElement("span");b.className="dk-chevron",b.innerHTML=te();const g=m.querySelector(".toggle-all");h.append(b,...m.childNodes);const _=h.querySelector(":scope > .count"),E=h.querySelector(":scope > .createNewTicketMenu, :scope > .createNewTicket");_&&E&&E.before(_);const A=document.createElement("span");A.className="dk-lane-spacer",h.append(A),g&&h.append(g),m.append(h),h.addEventListener("click",T=>{T.target.closest("a, button, input, select, .createNewTicketMenuPanel")||m.querySelector(".expander")?.click()})}function te(){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'}function le(){const m=document.querySelector("#content form#query_form h2"),h=document.querySelector("#content > .contextual");m&&h&&h.before(m);const b=document.getElementById("ticket-info"),g=document.querySelector("#content > h2");b&&g&&g.append(b)}function be(){be.installed||(be.installed=!0,new MutationObserver(()=>{const m=document.querySelector("#context-menu > ul");m&&!m.dataset.dkEnhanced&&Ae(m)}).observe(document.body,{childList:!0,subtree:!0}))}function Ee(){return{status:"<circle cx='12' cy='12' r='9'/><circle cx='12' cy='12' r='3'/>",tracker:"<path d='M4 6h16M4 12h16M4 18h10'/>",priority:"<path d='M5 21V4h11l-1.5 4L16 12H5'/>",assignee:"<circle cx='12' cy='8' r='4'/><path d='M4 21c1-4 4-6 8-6s7 2 8 6'/>",done:"<path d='M19 5L5 19'/><circle cx='7' cy='7' r='2'/><circle cx='17' cy='17' r='2'/>",alert:"<path d='M6 16v-5a6 6 0 1 1 12 0v5l2 2H4z'/><path d='M10 20a2 2 0 0 0 4 0'/>",watchers:"<path d='M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z'/><circle cx='12' cy='12' r='3'/>",watch:"<path d='M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9z'/>",tags:"<path d='M3 12V4h8l10 10-8 8z'/><circle cx='7.5' cy='7.5' r='1.5'/>",delete:"<path d='M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3'/>",open:"<path d='M14 4h6v6M20 4l-9 9M18 14v6H4V6h6'/>",edit:"<path d='M4 20h4L19 9l-4-4L4 16z'/>",copy:"<rect x='8' y='8' width='12' height='12' rx='2'/><path d='M16 8V4H4v12h4'/>",item:"<circle cx='12' cy='12' r='2'/>"}}function de(m){const h=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${Ee()[m]||Ee().item}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(h)}")`}function Ae(m){m.dataset.dkEnhanced="true";const h=Array.from(m.children),b=z=>z.querySelector(":scope > a")?.textContent.trim()||"",g=z=>z.querySelector(":scope > a"),_=z=>{const B=g(z);return B?B.classList.contains("icon-edit")?"edit":B.classList.contains("icon-copy")?"copy":B.classList.contains("icon-del")?"delete":/icon-fav/.test(B.className)?"watch":{Status:"status",Tracker:"tracker",Priorität:"priority","Zugewiesen an":"assignee","% erledigt":"done",Alert:"alert",Beobachter:"watchers",Tags:"tags"}[b(z)]||"other":"other"},E={};h.forEach(z=>{const B=_(z);z.classList.add("dk-cm-item",`dk-cm-${B}`),z.style.setProperty("--dk-icon",de(B)),(E[B]=E[B]||[]).push(z);const G=z.querySelector(":scope > ul a.icon-checked"),oe=g(z);if(G&&oe&&!oe.querySelector(".dk-cm-val")){const xe=document.createElement("span");xe.className="dk-cm-val",xe.textContent=G.textContent.trim(),oe.append(xe)}z.querySelectorAll(":scope > ul > li").forEach(xe=>xe.classList.add("dk-cm-sub"))});const A=Array.from(document.querySelectorAll(".issue-card.context-menu-selection")),T=A.length===1?A[0]:null,L=(z,B="li")=>{const G=document.createElement(B);return G.className=z,G},w=L("dk-cm-head");if(T){const z=L("dk-cm-head-id","span");z.textContent=`#${T.dataset.id}`;const B=L("dk-cm-head-title","span");B.textContent=T.querySelector(".dk-title")?.textContent||T.querySelector(".name a")?.textContent.replace(/^#?\d+\s*:\s*/,"")||"",w.append(z,B)}else w.textContent=`${A.length||"Mehrere"} Tickets ausgewählt`;let I=null;if(T){I=L("dk-cm-tiles");const z=(B,G,oe,xe)=>{if(!oe)return;const Z=L("dk-cm-tile","a");Z.href=oe,xe&&(Z.target="_blank",Z.rel="noopener"),Z.style.setProperty("--dk-icon",de(B)),Z.textContent=G,I.append(Z)};z("open","Öffnen",T.dataset.href||`/issues/${T.dataset.id}`,!0),z("edit","Bearbeiten",g(E.edit?.[0]||document.createElement("li"))?.getAttribute("href")),z("copy","Kopieren",g(E.copy?.[0]||document.createElement("li"))?.getAttribute("href")),[...E.edit||[],...E.copy||[]].forEach(B=>B.classList.add("dk-cm-hidden"))}const M=[["status","assignee","priority","tags"],["tracker","done","alert","watchers","watch","other",...T?[]:["edit","copy"]],["delete"]],W=[w];I&&W.push(I),M.forEach(z=>{const B=z.flatMap(G=>E[G]||[]).filter(G=>!G.classList.contains("dk-cm-hidden"));B.length&&W.push(L("dk-cm-sep"),...B)}),m.append(...W,...(E.edit||[]).concat(E.copy||[]).filter(z=>z.classList.contains("dk-cm-hidden")))}function R(){const m=document.querySelector(".opacity-slider-container"),h=m?.querySelector("input.opacity-slider");if(!h||m.querySelector(".dk-opacity-value"))return;const b=m.querySelector("label");b&&(b.innerHTML=ne(),b.title="Deckkraft unwichtiger Tickets"),m.title="Deckkraft unwichtiger Tickets";const g=document.createElement("span");g.className="dk-opacity-value",m.append(g);const _=()=>{const E=Math.round(parseFloat(h.value)*100);g.textContent=`${E}%`,h.style.setProperty("--pct",`${E}%`)};h.addEventListener("input",_),_()}function vt(m){const b=m.querySelector(".attributes, .last-status-change")?.innerHTML.match(/Aktualisiert<\/b>:\s*(\d+)\.(\d+)\.(\d+)\s(\d+):(\d+)/);if(!b)return"";const[,g,_,E,A,T]=b.map(Number),L=Math.floor((Date.now()-new Date(E,_-1,g,A,T))/864e5);return L<=0?"heute":L===1?"gestern":`vor ${L} T`}function Gt(){const m=document.querySelector(".contextual");m.innerHTML="";const h=xt("Reset",()=>{yt(),Je()}),b=lt("input","Suche nach MA",fe),g=lt("input","Suche nach Kunde",_r),_=kt(),E=at(),A=document.createElement("select");A.className="profile-selector",s.profiles.forEach((L,w)=>{const I=document.createElement("option");I.value=w,I.textContent=L.name,w===c.currentProfileIndex&&(I.selected=!0),A.appendChild(I)}),A.addEventListener("change",L=>{const w=parseInt(L.target.value,0);c.currentProfileIndex=w,y(),window.location.reload()});const T=v.departments.filter(L=>!L.noFilterButton).map(L=>Ut(L.identifier,L.labels.map(w=>w.toLowerCase()),L.color));m.append(A,h,b,g,...T,E,Ce(),ke("zzz","oldOnly","#7f77dd","Nur Tickets, die seit 14+ Tagen nicht aktualisiert wurden (Spinnweben)"),it(),_)}function at(){const m=document.createElement("div");m.className="tag-filter-menu";const h=document.createElement("button");h.name="board-filter",h.textContent="Tags";const b=document.createElement("div");b.className="tag-filter-menu-panel",b.hidden=!0;const _=[...(s.tags||[]).map(E=>({...E,filterLabel:E.label.toLowerCase(),buttonLabel:E.label})),...(s.dynamicTags||[]).map(E=>{const A=E.label.replace(/\.\.\.|[.…]/g,"").trim();return{...E,filterLabel:A.toLowerCase(),buttonLabel:A}})].map(E=>{const A=document.createElement("button");A.name="board-filter",A.className="tag-filter-button",A.textContent=E.buttonLabel,A.style.borderColor=E.color,A.style.setProperty("--border-color",E.color);const T=E.filterLabel,L=c.tagFilters.includes(T);return A.classList.toggle("active",L),A.addEventListener("click",()=>{const w=c.tagFilters.includes(T)?c.tagFilters.filter(I=>I!==T):[...c.tagFilters,T];c.tagFilters=w,A.classList.toggle("active",c.tagFilters.includes(T)),y(),Je()}),A});return h.addEventListener("click",()=>{b.hidden=!b.hidden}),document.addEventListener("click",E=>{m.contains(E.target)||(b.hidden=!0)}),b.append(..._),m.append(h,b),m}function it(){const m=document.createElement("button");m.type="button",m.name="reset-button",m.className="toggle-lanes-button";const h=()=>Array.from(document.querySelectorAll(".agile-board table.issues-board:not(.sticky) tr.group.swimlane")).filter(g=>g.style.display!=="none"&&g.querySelector(".expander")),b=()=>{const g=h().some(_=>_.classList.contains("open"));m.textContent=g?"Alle zuklappen":"Alle aufklappen"};return m.addEventListener("click",()=>{const g=h(),_=g.some(E=>E.classList.contains("open"));g.filter(E=>E.classList.contains("open")===_).forEach(E=>E.querySelector(".expander").click()),b()}),document.addEventListener("click",g=>{g.target.closest?.("tr.group")&&setTimeout(b,0)}),setTimeout(b,0),m}function ke(m,h,b,g){const _=document.createElement("button");return _.type="button",_.name="board-filter",_.textContent=m,_.title=g,_.style.borderColor=b,_.style.setProperty("--border-color",b),c[h]&&_.classList.add("active"),_.addEventListener("click",()=>{c[h]=!c[h],_.classList.toggle("active",c[h]),y(),Je()}),_}function Ce(){const m="#b31814",h=document.createElement("button");return h.name="board-filter",h.textContent="High Prio",h.style.borderColor=m,h.style.setProperty("--border-color",m),c.highPrio&&h.classList.add("active"),h.addEventListener("click",()=>{c.highPrio=!c.highPrio,h.classList.toggle("active",c.highPrio),y(),Je()}),h}function kt(){const m=document.createElement("div");m.className="opacity-slider-container";const h=document.createElement("label");h.textContent="Useless Ticket Opacity";const b=document.createElement("input");return b.type="range",b.min=0,b.max=1,b.step=.01,b.value=c.uselessOpacity,b.className="opacity-slider",b.addEventListener("input",g=>{const _=parseFloat(g.target.value);c.uselessOpacity=_,y(),document.documentElement.style.setProperty("--useless-opacity",_)}),m.append(h,b),m}function wr(){document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity),document.querySelectorAll(".issue-card").forEach(h=>{const g=h.querySelector(".user")?.innerText.trim().toLowerCase()||"",_=v.departments.find(A=>A.labels.some(T=>g.includes(T.toLowerCase()))),E=!_||_.useless===!0;h.classList.toggle("useless",E)})}function fe(m){c.user=m?m.target.value.toLowerCase():"",y(),Je()}function _r(m){c.focus=m?m.target.value.toLowerCase():"",y(),Je()}function xt(m,h){const b=document.createElement("button");return b.name="reset-button",b.textContent=m,b.addEventListener("click",h),b}function yt(){c.filters=[],c.tagFilters=[],c.user="",c.focus="",c.activeButtons=[],c.totalTickets=0,c.displayedTickets=0,c.uselessOpacity=.2,c.highPrio=!1,c.oldOnly=!1,y(),document.querySelectorAll(".contextual input").forEach(m=>{m.value=""}),document.querySelectorAll(".contextual button.active").forEach(m=>m.classList.remove("active")),document.querySelectorAll(".tag-filter-menu-panel button.active").forEach(m=>m.classList.remove("active")),document.querySelectorAll(".tag-filter-menu-panel").forEach(m=>{m.hidden=!0}),document.querySelector(".opacity-slider").value=.2,document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity)}function Ut(m,h,b=null){const g=document.createElement("button");return g.name="board-filter",g.textContent=m,g.style.borderColor=b,g.style.setProperty("--border-color",b),Array.isArray(c.activeButtons)||(c.activeButtons=[]),c.activeButtons.includes(m)&&g.classList.add("active"),b&&g.addEventListener("click",()=>{c.activeButtons.includes(m)?(c.activeButtons=c.activeButtons.filter(E=>E!==m),g.classList.remove("active")):(c.activeButtons.push(m),g.classList.add("active")),Xi(h,c.activeButtons.includes(m)),y()}),g}function lt(m,h,b){const g=document.createElement("div");g.className="input-container";const _=document.createElement(m);_.className="live_search_field",_.placeholder=h,h.toLowerCase().includes("namen")?_.value=c.user||"":h.toLowerCase().includes("fokus")&&(_.value=c.focus||"");const E=document.createElement("div");return E.className="clear-button",E.textContent="x",E.addEventListener("click",()=>{_.value="",b()}),g.append(_),g.append(E),_.addEventListener("input",b),g}function Xi(m,h){Array.isArray(c.filters)||(c.filters=[]),h?m.forEach(b=>{c.filters.includes(b)||c.filters.push(b)}):c.filters=c.filters.filter(b=>!m.includes(b)),Je(),y()}function Je(){const m=document.querySelectorAll(".issue-card");c.totalTickets=m.length,c.displayedTickets=0,m.forEach(h=>{Vi(h)?(h.style.display="block",c.displayedTickets++):h.style.display="none"}),Ji(),pn(),Fo()}function Fo(){const m=!!c.focus||!!c.user||!!c.highPrio||Array.isArray(c.filters)&&c.filters.length>0||Array.isArray(c.tagFilters)&&c.tagFilters.length>0;document.querySelectorAll("tr.group.swimlane").forEach(h=>{if(h.getAttribute("data-merged-away")==="true")return;const b=h.getAttribute("data-id"),g=[];let _=h.nextElementSibling;for(;_&&_.classList.contains("swimlane")&&!_.classList.contains("group")&&_.getAttribute("data-id")===b;)g.push(_),_=_.nextElementSibling;const E=g.some(T=>Array.from(T.querySelectorAll(".issue-card")).some(L=>L.style.display!=="none")),A=m&&!E;h.style.display=A?"none":"",g.forEach(T=>{T.style.display=A?"none":""})})}function Ji(){const m=document.querySelector(".contextual");let h=document.querySelector("#ticket-info");h||(h=document.createElement("span"),h.id="ticket-info",h.style.color="black",m.prepend(h)),h.textContent=`Tickets ${c.displayedTickets} / ${c.totalTickets}`,y()}function Vi(m){const h=m.querySelector(".project")?.textContent.toLowerCase()||"",b=m.querySelector(".user")?.textContent.toLowerCase().trim()||"",g=Array.from(m.querySelectorAll(".tag-label-color")).map(I=>I.textContent.toLowerCase().trim()),_=c.filters.length===0||c.filters.some(I=>b.includes(I)),E=!c.focus||h.includes(c.focus.toLowerCase()),A=!c.user||b.includes(c.user.toLowerCase()),T=c.tagFilters.length===0||g.some(I=>c.tagFilters.some(M=>I.includes(M))),L=!c.highPrio||m.classList.contains("bk-orange"),w=!c.oldOnly||!!m.querySelector(".semi-old");return _&&E&&A&&T&&L&&w}function Ki(){document.querySelectorAll(".issue-card a").forEach(h=>h.setAttribute("target","blank"))}function Qi(){(document.querySelectorAll(".issue-card")||[]).forEach(h=>{Zi(h),el(h)})}function Zi(m){const h=m.querySelector(".user");if(!h)return;const b=h.innerText.trim(),g=v.departments.find(E=>E.labels.some(A=>b.includes(A)));if(g?(m.style.setProperty("--border-color",g.color),m.setAttribute("data-department",g.identifier),m.classList.toggle("highlight-badge",v.addBadgeHighlight===!0)):m.style.setProperty("--border-color","white"),m.classList.toggle("highlight-background",v.addBgHighlight===!0),m.classList.toggle("highlight-border",v.addBorderHighlight===!0),!v.addPriorityBadge)return;m.classList.contains("bk-orange")&&(m.classList.add("prio-badge"),m.setAttribute("data-prio","H"),m.style.setProperty("--prio-color","#b31814"))}function el(m){const h=m.querySelector(".attributes");if(!h)return;const b=h.innerHTML.match(/Aktualisiert<\/b>:\s*([\d.]+\s[\d:]+)/);if(!b)return;const g=b[1],[_,E,A]=g.split("."),[T,L]=A.split(" "),[w,I]=L.split(":"),M=new Date(parseInt(T),parseInt(E)-1,parseInt(_),parseInt(w),parseInt(I)),z=new Date-M,B=Math.floor(z/(1e3*60*60*24));if(B>=14){h.className="last-status-change";const G=qo();if(G.classList.add("semi-old"),m.append(G),B>=30){const oe=qo();oe.classList.add("too-old"),m.append(oe)}setTimeout(()=>{m.classList.add("loaded")},500)}}function tl(){[...s.tags,...s.dynamicTags],document.querySelectorAll(".tag-label-color a").forEach(m=>{const h=m.textContent.trim();let b=s.tags.find(g=>g.label===h);if(b||(b=s.dynamicTags.find(g=>{const _=g.label.replace(/\.\.\.|[.…]/g,"").trim().toLowerCase();return h.toLowerCase().includes(_)})),b&&(b.color&&m.parentElement.style.setProperty("--tag-color",b.color),b.gifUrl&&(m.parentElement.style.background="var(--tag-color)",m.parentElement.style.border="4px solid var(--tag-color) !important",!m.parentElement.querySelector(".tag-gif")))){const g=document.createElement("img");g.src=b.gifUrl,g.style.width="100%",g.style.maxHeight="200px",m.parentElement.appendChild(g)}})}function pn(){document.querySelectorAll(".issue-status-col").forEach(h=>{const b=Array.from(h.querySelectorAll(".issue-card"));b.sort((g,_)=>{const E=g.querySelector(".user"),A=_.querySelector(".user"),T=E?.textContent.trim()||"",L=A?.textContent.trim()||"",w=v.departments.find(z=>z.labels.some(B=>T.includes(B))),I=v.departments.find(z=>z.labels.some(B=>L.includes(B))),M=w?w.sort:999,W=I?I.sort:999;return M-W}),b.forEach(g=>h.appendChild(g))})}function qo(){const h=document.createElementNS("http://www.w3.org/2000/svg","svg");return h.id="web",h.setAttribute("viewBox","0 0 40 40"),h.innerHTML='<path d="m 32.682208,39.6875 c 2.267113,1.18e-4 4.531865,-0.03587 6.789662,-0.1465 0.256176,-0.01266 0.28388,-0.382313 0.08425,-0.474728 0.13765,-1.525455 0.05703,-3.096879 0.06304,-4.6255 0.0064,-1.635908 0.01021,-3.27146 0.01134,-4.907372 l 0.0057,-9.814737 c 0.0034,-6.548068 0.02835,-13.0874013 -0.183535,-19.63071912 -0.0037,-0.11708738 -0.160857,-0.11743009 -0.164561,0 -0.101103,3.12496942 -0.147326,6.24935742 -0.168454,9.37401022 -1.014734,0.5949919 -1.943502,1.1523139 -3.141585,1.2004179 -1.200661,0.04809 -2.070747,-0.493429 -3.158879,-0.9086587 -0.02985,-0.011537 -0.05741,-0.00894 -0.08311,-0.00192 -0.661445,-2.6780931 -1.373,-5.3381368 -2.184383,-7.9522978 -0.05197,-0.1674037 -0.272995,-0.1011395 -0.23932,0.072931 0.524074,2.7186009 1.136585,5.4203161 1.777179,8.1148663 -1.228356,1.1760582 -2.535263,2.1413292 -4.117192,2.6641612 -0.795392,0.262691 -1.617994,0.421159 -2.44823,0.451242 -0.655446,0.02351 -1.336689,-0.141456 -1.983568,-0.05378 -1.603634,-2.652144 -3.152133,-5.3793132 -4.951124,-7.8719441 -0.103975,-0.1439772 -0.301078,0.040187 -0.22424,0.1922395 1.442558,2.8572226 3.190005,5.5416926 4.849042,8.2533306 -0.538357,1.38399 -0.933424,2.734076 -1.829061,3.931335 -0.479229,0.64025 -1.032384,1.222195 -1.644423,1.704198 -0.554912,0.437384 -1.207169,0.696897 -1.751521,1.134279 -0.0155,0.01239 -0.02532,0.0265 -0.03666,0.04018 -2.756311,-2.335022 -5.549044,-4.617361 -8.4430101,-6.705522 -0.1190932,-0.08575 -0.2656253,0.117174 -0.1545072,0.221309 2.6392123,2.469843 5.3973103,4.793862 8.1724683,7.091859 -0.349001,2.01442 -0.931794,3.907594 -1.991939,5.619459 -0.537779,0.868118 -1.174967,1.663874 -1.891529,2.355708 -0.726847,0.701334 -1.574424,1.141064 -2.347826,1.735106 C 9.2033832,30.032015 9.3407433,30.07344 8.1771294,29.701829 L 6.1341367,29.077275 c -0.1870861,-0.05283 -2.6714972,-1.081291 -3.0346875,-0.75571 -0.3631763,0.325574 5.2191543,2.024185 7.8606538,2.903382 0.01625,0.05981 0.0548,0.108492 0.108208,0.134146 0.05314,1.199794 0.287396,2.355485 0.175144,3.578382 -0.134514,1.463741 -0.586918,2.737486 -1.106138,4.066089 -3.3497848,-9.29e-4 -6.6993195,0.03241 -10.04224732,0.179258 -0.1265391,0.006 -0.12680411,0.212204 -5.29e-4,0.217581 6.55268442,0.288368 13.13131632,0.14141 19.68836932,0.14964 1.939783,0.0025 3.884434,0.03112 5.830787,0.06119 0.03666,0.0614 0.110098,0.08865 0.18463,0.05131 0.02721,-0.01359 0.05378,-0.03113 0.07975,-0.0476 2.267367,0.03543 4.537049,0.07221 6.804167,0.07232 z M 19.782854,39.034132 c -1.190948,0.0016 -2.38291,-0.0036 -3.575004,-0.0086 0.931339,-1.44412 1.49065,-3.861142 1.209335,-5.682511 1.232639,0.389593 2.466659,0.773474 3.703295,1.147875 0.0021,6.59e-4 0.0042,0.0013 0.006,0.0019 0.09139,0.606701 0.208214,1.200948 0.15394,1.837715 -0.08995,1.058957 -0.565463,1.791685 -0.941025,2.70063 -0.185349,6.58e-4 -0.37134,0.0031 -0.556695,0.0031 z m 1.110042,-0.0063 c 0.840803,-1.036488 1.16268,-3.008024 0.737426,-4.385047 1.517956,0.457003 3.03866,0.903108 4.562327,1.337642 0.07253,0.500363 0.137348,0.988013 0.06081,1.518757 -0.0774,0.537391 -0.341972,0.992017 -0.518763,1.470543 -1.615632,0.02467 -3.229872,0.04861 -4.841792,0.0581 z m -4.96116,-0.0031 c -1.744146,-0.0075 -3.489196,-0.01663 -5.234487,-0.01915 1.143536,-2.037844 1.689426,-5.385779 0.792648,-7.602438 0.190224,0.06361 0.380448,0.126749 0.570086,0.191001 1.595917,0.539607 3.19603,1.062663 4.799951,1.573152 -0.02532,0.999774 0.06066,1.978525 -0.112668,2.999189 -0.169928,0.999458 -0.525635,1.907218 -0.815514,2.858254 z m 21.89738,-0.04697 c -1.479967,-0.05032 -2.963175,-0.07127 -4.446854,-0.07666 0.0474,-0.103492 0.08387,-0.213209 0.111004,-0.320812 0.03288,-0.130075 0.08156,-0.377833 0.06471,-0.582282 1.416284,0.37187 2.839449,0.717378 4.271148,0.979743 z m -11.425058,-0.01787 c 0.205039,-0.426939 0.319143,-0.945746 0.37595,-1.341351 0.06625,-0.461119 0.08341,-0.984679 -0.0011,-1.473015 1.15557,0.326928 2.312335,0.648844 3.471292,0.960581 0.01096,0.0028 0.02192,0.0058 0.03288,0.0086 0.164787,0.370922 0.302627,0.704861 0.278362,1.145407 -0.01096,0.201603 -0.05643,0.428165 -0.123855,0.647805 -1.344309,0.01141 -2.689499,0.03133 -4.033525,0.05193 z m 4.468617,-0.05502 c 0.06282,-0.169002 0.101443,-0.358375 0.116032,-0.575482 0.02306,-0.344652 -0.02116,-0.736492 -0.159534,-1.0669 0.79196,0.214892 1.586442,0.432684 2.382405,0.644095 -0.0064,0.08133 -0.0037,0.163386 -0.0029,0.207694 0.0057,0.306674 -0.09082,0.540704 -0.201941,0.785031 -0.711139,-0.0013 -1.422754,5.09e-4 -2.13418,0.0056 z m 8.305786,-0.03462 c -0.0037,-0.0044 -0.01285,-0.0091 -0.01663,-0.01359 -0.03666,-0.03924 -0.07499,-0.07759 -0.112668,-0.116208 -0.24446,-1.922959 -0.625518,-3.837638 -1.033065,-5.738761 0.02381,-0.134187 0.01965,-0.267289 -0.0155,-0.388187 0.215623,0.21774 0.508307,0.314172 0.811614,0.29423 0.08738,-0.0057 0.205835,-0.02779 0.324662,-0.06799 -5.29e-4,0.459535 -0.0024,0.918602 -5.29e-4,1.377822 0.006,1.5359 -0.07926,3.116166 0.04241,4.652699 z m -0.818304,-0.166281 c -1.429137,-0.458586 -2.879931,-0.845525 -4.333625,-1.218342 0.245633,-0.228821 0.430399,-0.541659 0.54721,-0.877133 0.09226,-0.265213 0.161499,-0.602638 0.148384,-0.921021 1.187232,1.052628 2.389687,2.086665 3.638038,3.016496 z m 0.354785,-0.448147 c -0.703717,-1.373226 -1.484504,-2.709547 -2.286465,-4.030237 0.416402,-0.07184 0.846934,-0.150895 1.172519,-0.451239 0.336152,1.507416 0.690974,3.009823 1.113946,4.481476 z M 37.71646,37.407207 c -0.769118,-0.732029 -1.567756,-1.435496 -2.37571,-2.126382 0.136818,-0.0576 0.266494,-0.136116 0.379869,-0.223148 0.1008,-0.07722 0.217172,-0.182275 0.316272,-0.304122 0.545492,0.89755 1.100657,1.787432 1.679565,2.653652 z m -4.089859,-0.02471 c -0.789969,-0.201282 -1.580224,-0.400072 -2.367903,-0.605154 0.323,-0.286419 0.601612,-0.681891 0.791529,-0.994577 0.317028,-0.521884 0.600551,-1.213394 0.609689,-1.872949 0.01625,-0.0063 0.0325,-0.01097 0.0491,-0.01792 0.524354,0.464918 1.04861,0.936293 1.575254,1.405638 -0.0076,0.394024 0.05133,0.766958 -0.07979,1.168893 -0.119963,0.368702 -0.330257,0.657825 -0.577892,0.916075 z m -3.007155,-0.773905 c -0.204208,-0.05444 -0.408284,-0.107485 -0.611914,-0.163188 -1.142395,-0.312056 -2.283176,-0.631873 -3.423284,-0.955636 -0.01324,-0.02975 -0.02948,-0.05835 -0.04407,-0.08716 0.803676,-0.247176 1.502786,-1.280335 1.90548,-2.02439 0.409267,-0.756398 0.690921,-1.636691 0.747471,-2.525698 0.823092,0.705446 1.645811,1.41191 2.467191,2.120203 0.236749,0.204133 0.472786,0.411126 0.708976,0.61937 -0.0064,0.01991 -0.01285,0.03971 -0.0189,0.05996 -0.0155,0.02689 -0.02381,0.05707 -0.02721,0.08777 -0.185084,0.622525 -0.301796,1.226384 -0.658213,1.793209 -0.28218,0.448458 -0.705187,0.720142 -1.045336,1.075554 z m -4.504312,-1.25234 c -1.449701,-0.413644 -2.897425,-0.83513 -4.34255,-1.269031 1.038435,-0.435798 1.989116,-1.424751 2.621146,-2.323568 0.779684,-1.109278 1.306646,-2.440268 1.36719,-3.843558 1.018445,0.867483 2.036165,1.736023 3.052895,2.606672 -0.10938,0.924134 -0.302363,1.781083 -0.753602,2.601727 -0.471237,0.857041 -1.212911,1.291404 -1.750407,2.03799 -0.09195,0.0041 -0.178128,0.09008 -0.194683,0.189765 z m 8.808932,-0.428985 c -0.543494,-0.460802 -1.088672,-0.918073 -1.631595,-1.373494 0.500082,-0.369024 0.943549,-0.916669 1.109483,-1.524322 0.456957,0.760198 0.912931,1.526814 1.373888,2.290808 -0.09052,0.124377 -0.177789,0.255598 -0.29231,0.348011 -0.17537,0.141469 -0.363553,0.206464 -0.559481,0.258998 z m 1.344322,-0.966762 c -0.517219,-0.847546 -1.041861,-1.688521 -1.559078,-2.52879 0.784536,-0.177877 1.586997,-0.69734 2.061664,-1.432215 0.244461,1.089021 0.478789,2.187815 0.72069,3.285384 -0.05227,0.08292 -0.122116,0.160577 -0.218646,0.23242 -0.291894,0.21774 -0.67075,0.313761 -1.004616,0.443202 z M 20.976031,33.848017 c -1.237495,-0.375351 -2.472587,-0.759204 -3.706089,-1.149112 -0.0064,-0.02057 -0.01247,-0.04091 -0.01852,-0.06181 1.351737,-0.496883 2.491706,-2.324495 3.147723,-3.603725 0.634309,-1.236507 1.36693,-3.052181 1.258971,-4.576053 0.79168,0.657969 1.581978,1.317092 2.366228,1.982975 0.476664,0.404444 0.952175,0.811688 1.428555,1.217107 -0.256176,1.348222 -0.678173,2.618899 -1.457003,3.719315 -0.809097,1.143459 -1.799948,1.657803 -2.851521,2.358183 -0.04112,-0.013 -0.08939,0.01463 -0.0954,0.06367 -0.02419,0.01646 -0.04849,0.03266 -0.07306,0.04945 z m 12.00128,-0.559412 c -0.410693,-0.344968 -0.819468,-0.690348 -1.222162,-1.037849 -0.704858,-0.607965 -1.413393,-1.210947 -2.119679,-1.816695 0.494088,-0.109826 0.997212,-0.444273 1.313084,-0.754744 0.346129,-0.340235 0.901513,-1.113857 0.957205,-1.761065 0.646017,1.062438 1.290088,2.126545 1.937829,3.187718 0.111382,0.182281 0.222198,0.365672 0.333014,0.548905 -0.147061,0.345922 -0.280705,0.690105 -0.513185,0.995197 -0.200769,0.263313 -0.430209,0.471429 -0.686106,0.638533 z m -16.100626,-0.71337 c -1.563651,-0.496246 -3.124588,-1.003172 -4.682812,-1.519993 -0.0325,-0.01075 -0.06478,-0.02181 -0.09707,-0.03291 1.493113,-0.77855 2.863604,-2.441154 3.740676,-3.793489 1.113813,-1.717565 1.891132,-3.802043 2.002519,-5.929772 1.130966,0.935215 2.263912,1.868015 3.392594,2.803859 -0.195628,0.69437 -0.223672,1.453083 -0.403295,2.158526 -0.232177,0.910527 -0.575745,1.780658 -1.012424,2.593074 -0.410118,0.763045 -0.901897,1.468401 -1.464804,2.100422 -0.447819,0.502577 -0.996305,0.904256 -1.386717,1.461271 -0.02646,0.01992 -0.04879,0.04855 -0.06191,0.08716 -0.0029,0.0044 -0.006,0.0086 -0.0087,0.013 -0.01209,0.01932 -0.01663,0.03911 -0.01776,0.05873 z M 38.61063,32.442953 c -0.209688,-0.02193 -0.40517,-0.117374 -0.584026,-0.252199 -0.05968,-0.04557 -0.135419,-0.01834 -0.177373,0.0383 -0.161348,-0.742159 -0.324284,-1.482932 -0.482507,-2.22034 -0.05227,-0.24401 -0.105864,-0.486941 -0.158401,-0.730634 0.261318,0.232297 0.756358,0.266324 1.03139,0.244778 0.319296,-0.02522 0.638943,-0.129227 0.901976,-0.325144 0,0.112042 -2.65e-4,0.224215 0,0.33626 2.64e-4,0.92192 -0.0029,1.843614 -0.0049,2.765535 -0.0994,0.06141 -0.199862,0.123873 -0.311245,0.139698 -0.07291,0.01041 -0.144869,0.01108 -0.214753,0.0038 z m -4.143967,-1.408112 c -0.124535,-0.203183 -0.249525,-0.406282 -0.372625,-0.609479 -0.547492,-0.903564 -1.096632,-1.806038 -1.644982,-2.709282 0.688578,0.0522 1.409068,-0.201175 1.97855,-0.611334 0.490088,-0.35289 1.065855,-0.961172 1.320895,-1.634967 0.302174,1.338728 0.603981,2.677305 0.907001,4.015401 -0.571768,0.80039 -1.22124,1.349012 -2.188847,1.549661 z m -5.338799,-1.03599 c -0.945334,-0.810201 -1.888865,-1.622219 -2.835907,-2.42989 1.479397,-0.482952 2.641453,-2.481333 2.86993,-4.163135 0.802248,1.321009 1.605808,2.641239 2.408628,3.962243 -7.95e-4,0.0072 -0.0013,0.01367 -0.0011,0.02095 -0.181344,0.206646 -0.190188,0.471769 -0.286151,0.742996 -0.142526,0.402562 -0.358376,0.772548 -0.644271,1.068141 -0.288453,0.298129 -0.632219,0.507845 -1.003497,0.650899 -0.166792,0.06455 -0.339667,0.09837 -0.507611,0.147739 z m 8.99245,-0.907424 c -0.346696,-0.0056 -0.659196,-0.285433 -0.986205,-0.224986 -0.0053,9.28e-4 -0.0091,0.0048 -0.01398,0.0067 -0.286187,-1.327338 -0.572158,-2.653828 -0.864607,-3.978315 0.627743,0.240205 1.401079,0.250506 1.990265,0.04633 0.317293,-0.11012 0.668185,-0.313177 0.909232,-0.599591 -0.0064,1.458996 -0.01096,2.917714 -0.0121,4.376395 -0.315856,0.214897 -0.630339,0.379351 -1.022467,0.373366 z m -5.988085,-1.895199 c -0.896782,-1.476083 -1.792981,-2.952547 -2.68976,-4.428314 1.777561,0.599105 4.175567,-0.09084 5.266841,-1.85997 0.289588,1.257396 0.57484,2.51567 0.859583,3.774329 -0.44125,0.641199 -0.65985,1.358431 -1.30416,1.856259 -0.662873,0.512073 -1.376526,0.598199 -2.132504,0.657696 z m -6.313853,-0.03207 c -0.395553,-0.337073 -0.790062,-0.674847 -1.1859,-1.01127 -0.69915,-0.594043 -1.397137,-1.192853 -2.095137,-1.79259 0.946758,-0.238622 2.000954,-1.31425 2.485041,-1.956397 0.708002,-0.939325 1.285806,-2.329341 1.319221,-3.638958 0.767118,1.262773 1.534677,2.525472 2.302082,3.787928 0.07998,0.131665 0.160441,0.263929 0.240416,0.395595 -0.207345,0.916222 -0.502906,1.764705 -1.048686,2.519517 -0.57805,0.799125 -1.306185,1.15434 -2.017037,1.696166 z m 11.526007,-2.645617 c -0.399719,-0.0077 -0.795774,-0.101693 -1.192039,-0.103842 -0.267893,-1.20834 -0.526761,-2.416433 -0.80436,-3.623506 1.128969,0.810516 2.990973,0.09315 3.847771,-1.177545 v 0.104475 c 0,1.264354 -0.01964,2.528515 -0.02457,3.792874 -0.456962,0.453843 -0.760031,0.865798 -1.425763,0.980368 -0.134249,0.02309 -0.267818,0.02992 -0.401065,0.02736 z m -15.343119,-0.61937 c -1.219222,-1.048512 -2.439555,-2.09978 -3.666479,-3.142594 1.353445,-0.330105 2.704735,-1.770506 3.517544,-2.910799 0.739415,-1.038067 1.474227,-2.425148 1.619882,-3.800905 0.789106,1.298536 1.578508,2.596644 2.367903,3.894862 -0.215057,1.546663 -0.341103,2.855076 -1.339862,4.124812 -0.418686,0.532644 -0.92382,0.969791 -1.479311,1.315392 -0.339591,0.211093 -0.713516,0.302445 -1.019677,0.519232 z m 7.281651,-1.393894 c -0.128504,-0.211734 -0.257197,-0.423083 -0.386004,-0.634821 -0.638314,-1.051047 -1.276651,-2.10206 -1.914963,-3.153106 1.223789,0.466498 2.654086,0.339679 3.819325,-0.215111 0.983602,-0.46808 2.237864,-1.494298 2.693108,-2.709282 0.380131,1.563749 0.756842,3.127227 1.118407,4.692877 -0.580337,0.58233 -1.132422,1.139899 -1.879262,1.493413 -1.046145,0.494982 -2.066128,0.490891 -3.172822,0.302276 -0.155642,-0.0265 -0.260069,0.094 -0.277796,0.223746 z m 7.461262,-1.963811 c -0.541894,-0.01496 -1.020905,-0.231098 -1.575252,-0.326983 -0.341558,-1.487481 -0.678942,-2.979334 -1.020235,-4.472824 1.629911,0.753234 4.017962,0.123415 4.955582,-1.555224 -0.0011,1.65806 -5.29e-4,3.316047 5.29e-4,4.974744 -0.559201,0.555432 -1.016831,1.115977 -1.792801,1.316626 -0.199786,0.05168 -0.387217,0.06866 -0.567853,0.06366 z m -8.078199,-2.183871 c -0.706965,-0.0034 -1.415939,-0.15894 -2.132509,-0.380164 -0.887639,-1.461206 -1.775343,-2.922281 -2.662982,-4.383808 1.356593,0.496565 3.326679,-0.01239 4.532761,-0.46731 1.430278,-0.539924 2.788088,-1.430198 3.793108,-2.690122 0.367862,1.539382 0.743991,3.076907 1.11841,4.613757 -0.353009,0.449091 -0.582128,0.998265 -0.948837,1.447673 -0.44639,0.5472 -0.983931,1.000206 -1.580833,1.327134 -0.707567,0.387857 -1.412156,0.536272 -2.119118,0.532832 z m 6.810857,-2.953445 c -0.483875,-0.01582 -0.96552,-0.116661 -1.461459,-0.242299 -0.375838,-1.639391 -0.757348,-3.278936 -1.156902,-4.912313 1.631339,1.473236 4.719282,1.198641 6.257511,-0.3739649 -0.0068,1.1247839 -0.0076,2.2499109 -0.0094,3.3750149 -0.68915,0.728862 -1.213216,1.487154 -2.154265,1.885927 -0.505648,0.214255 -0.99153,0.28355 -1.475405,0.267648 z" />',h}function Ho(){const m=s.tags,h=s.dynamicTags,b=document.getElementById("issue_tag_list"),g=window.jQuery&&window.jQuery(b),_=document.getElementById("issue_tags");if(!_)return;const E=_.querySelector(".select2-selection__rendered"),A=document.createElement("div");A.className="tag-cloud-buttons",A.style.cssText="margin-top:10px; display:flex; flex-wrap:wrap; gap:6px;",m.forEach(L=>{T({...L,isDynamic:!1})}),h.forEach(L=>{T({...L,isDynamic:!0})});function T(L){const w=document.createElement("button");w.textContent=L.label,w.type="button",w.style.cssText=`
            margin: 2px;
            padding: 4px 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875em;
            color: white;
            background: ${L.color||"#333"};
        `,A.appendChild(w);const I=()=>{const M=Array.from(b.options).some(W=>W.selected&&W.value===L.label);w.classList.toggle("selected",M)};I(),b.addEventListener("change",I),w.addEventListener("click",()=>{if(L.isDynamic){const W=prompt(L.prompt);if(!W)return;const z=L.valueTemplate.replace("{value}",W);let B=Array.from(b.options).find(G=>G.value===z);B?B.selected=!0:(B=new Option(z,z,!0,!0),b.add(B)),g.trigger("change");return}const M=Array.from(b.options).find(W=>W.value===L.label);if(M&&M.selected)M.selected=!1;else if(M)M.selected=!0;else{const W=new Option(L.label,L.label,!0,!0);b.add(W)}g.trigger("change"),I()})}_.querySelector(".tag-cloud-buttons")||E.parentElement.insertAdjacentElement("afterend",A)}function rl(){const h=new URLSearchParams(window.location.search).get("query_id");return h||(document.querySelector("tr.group.swimlane")?"default-board":null)}function nl(){const m=rl();if(!m)return;const h=document.querySelector(".list.issues-board tbody");if(!h)return;const b=Array.from(h.querySelectorAll("tr.group.open.swimlane"));s?.swimlanes?.length&&(b.sort((g,_)=>{const E=g.getAttribute("data-id"),A=_.getAttribute("data-id"),T=s.swimlanes.find(w=>w.identifier===E&&w.boardId===m),L=s.swimlanes.find(w=>w.identifier===A&&w.boardId===m);return T&&L?T.sort-L.sort:T?-1:L?1:0}),b.forEach(g=>{const _=g.getAttribute("data-id"),E=[];let A=g.nextElementSibling;for(;A&&A.classList.contains("swimlane")&&A.getAttribute("data-id")===_;)E.push(A),A=A.nextElementSibling;h.appendChild(g),E.forEach(T=>h.appendChild(T))})),ol(b,m),Fo(),b.forEach(g=>{if(g.style.display==="none")return;const _=g.querySelector("a[href]");if(!_||g.querySelector(".createNewTicket"))return;const A=(Array.isArray(g.__ticketChoices)?g.__ticketChoices:[{label:_.textContent.trim(),href:_.href}]).filter((I,M,W)=>I.href&&W.findIndex(z=>z.href===I.href)===M);if(A.length<=1){const I=A[0]?.href||_.href,M=document.createElement("a");M.classList.add("createNewTicket"),M.innerHTML="Neues Ticket",M.href=`${I}/issues/new`,M.target="_blank",_.after(M);return}const T=document.createElement("div");T.className="createNewTicketMenu";const L=document.createElement("button");L.type="button",L.className="createNewTicket",L.textContent="Neues Ticket";const w=document.createElement("div");w.className="createNewTicketMenuPanel",w.hidden=!0,A.forEach(I=>{const M=document.createElement("a");M.href=`${I.href}/issues/new`,M.target="_blank",M.textContent=I.label||I.href,w.appendChild(M)}),L.addEventListener("click",I=>{I.preventDefault(),I.stopPropagation(),w.hidden=!w.hidden}),document.addEventListener("click",I=>{T.contains(I.target)||(w.hidden=!0)}),T.append(L,w),_.after(T)})}function ol(m,h){const b=(s.swimlaneGroups||[]).filter(T=>T.boardId===h);if(!b.length)return;const g=T=>{const L=T.getAttribute("data-id"),w=[];let I=T.nextElementSibling;for(;I&&I.classList.contains("swimlane")&&!I.classList.contains("group")&&I.getAttribute("data-id")===L;)w.push(I),I=I.nextElementSibling;return w},_=T=>{const L=T.querySelector(".count");return L&&parseInt(L.textContent,10)||0},E=new Set;let A=!1;b.forEach(T=>{const L=m.filter(Z=>!E.has(Z)&&(T.laneIdentifiers||[]).includes(Z.getAttribute("data-id")));if(!L.length)return;const[w,...I]=L,M=w.getAttribute("data-id"),W=w.querySelector("a[href]"),z=L.map(Z=>{const Ve=Z.querySelector("a[href]");return Ve?{label:Ve.textContent.trim(),href:Ve.href}:null}).filter(Boolean);W&&(W.textContent=T.name),w.setAttribute("data-swimlane-group",T.id),w.__ticketChoices=z;const B=[];L.forEach(Z=>{B.push(...g(Z))}),B.forEach(Z=>{Z.querySelectorAll(".issue-card").forEach(Ve=>{Ve.setAttribute("data-origin-lane",Z.getAttribute("data-id"))})});const G=B.shift();if(G){G.setAttribute("data-id",M),G.setAttribute("data-merged-group",T.id),G.__groupHeader=w,G.previousElementSibling!==w&&w.after(G);const Z=G.querySelectorAll("td");B.forEach(Ve=>{Ve.querySelectorAll("td").forEach((il,ll)=>{const $o=Z[ll];$o&&Array.from(il.querySelectorAll(".issue-card")).forEach(sl=>$o.appendChild(sl))}),Ve.remove()}),A=!0}let oe=_(w);I.forEach(Z=>{oe+=_(Z),Z.style.display="none",Z.setAttribute("data-merged-away","true"),E.add(Z)});const xe=w.querySelector(".count");xe&&(xe.textContent=oe)}),A&&(pn(),mn())}function mn(){if(mn.installed)return;mn.installed=!0;const m=window.jQuery;let h=null;const b=(E,A)=>{E.setAttribute("data-id",A),m&&m(E).data("id",A)},g=()=>{h&&(h.rows.forEach(E=>b(E,h.primaryId)),h=null)},_=E=>{const A=h;setTimeout(()=>{h===A&&g()},E)};document.addEventListener("mousedown",E=>{const A=E.target.closest?.(".issue-card[data-origin-lane]"),T=A?.closest("tr[data-merged-group]");if(!T)return;g();const L=A.getAttribute("data-origin-lane"),w=T.__groupHeader?.getAttribute("data-id")||T.getAttribute("data-id");if(L===w)return;const I=[T,T.__groupHeader].filter(Boolean);h={rows:I,primaryId:w,originId:L},I.forEach(M=>b(M,L))},!0),m&&m(document).on("sortstop",()=>_(0)),document.addEventListener("mouseup",()=>_(1500),!0),m&&m.ajaxPrefilter&&m.ajaxPrefilter(E=>{if(!h||typeof E.data!="string")return;const{primaryId:A,originId:T}=h;E.data=E.data.replace(/(^|&)([^=&]*project[^=&]*)=([^&]*)/gi,(L,w,I,M)=>M===A?`${w}${I}=${T}`:L)})}function al(){if(v.useTagCloudWhitelist!==!0)return;const m=["issue_assigned_to_id","issue_status_id"],h=new WeakSet,b=v.tagCloudWhitelist,g={button:`
				padding:4px 8px;
				border-radius:4px;
				border:1px solid #ccc;
				background:#f3f4f6;
				color:#111;
				cursor:pointer;
				font-size:0.875em;
				margin:2px;
			`,buttonActive:`
				padding:4px 8px;
				border-radius:4px;
				border:1px solid #2563eb;
				background:#3b82f6;
				color:#fff;
				cursor:pointer;
				font-size:0.875em;
				margin:2px;
			`,buttonDisabled:`
				padding:4px 8px;
				border-radius:4px;
				border:1px solid #ccc;
				background:#f3f4f6;
				color:#aaa;
				cursor:not-allowed;
				font-size:0.875em;
				margin:2px;
				opacity:0.5;
			`,wrapper:`
				margin-top:8px;
				display:flex;
				flex-wrap:wrap;
				gap:6px;
				align-items:center;
				max-width:600px;
			`};function _(w){return document.querySelector(`#${w.id} ~ .select2 .select2-selection__rendered`)||w.parentElement&&w.parentElement.querySelector(".select2-selection__rendered")||w}function E(){const w=document.createElement("div");return w.style.cssText=g.wrapper,w.addEventListener("click",I=>{const M=I.target.closest("button");if(!M||M.disabled||!M._targetSelect)return;const W=M._targetSelect,z=M.dataset.value,B=Array.from(W.options).find(oe=>oe.value===z);if(!B)return;W.multiple?B.selected=!B.selected:W.value=z;const G=window.jQuery&&window.jQuery(W);G&&typeof G.trigger=="function"?G.trigger("change"):W.dispatchEvent(new Event("change",{bubbles:!0})),A(W,w)}),w}function A(w,I){I.querySelectorAll("button").forEach(M=>{const W=M.dataset.value,z=Array.from(w.options).find(G=>G.value===W),B=w.multiple?!!(z&&z.selected):w.value===W;M.disabled?M.style.cssText=g.buttonDisabled:B?M.style.cssText=g.buttonActive:M.style.cssText=g.button,M.dataset.value=W,M._targetSelect=w})}function T(w){if(!w||h.has(w))return;h.add(w);const I=_(w);if(!I||I.parentElement&&I.parentElement.querySelector('div[style*="flex-wrap"]'))return;const M=E(),W=document.createDocumentFragment();Array.from(w.options).forEach(B=>{if(!B.value||b&&b.length&&!b.includes(B.innerHTML))return;const G=document.createElement("button");G.type="button",G.textContent=B.text||B.label||B.value,G.dataset.value=B.value,G.disabled=B.disabled,G._targetSelect=w,W.appendChild(G)}),M.appendChild(W),I.insertAdjacentElement("afterend",M),A(w,M);const z=()=>A(w,M);w.addEventListener("change",z),M._cleanup=()=>w.removeEventListener("change",z)}m.forEach(w=>{const I=document.getElementById(w);I&&T(I)});const L=new MutationObserver(w=>{w.forEach(I=>{I.addedNodes.forEach(M=>{M instanceof HTMLElement&&m.forEach(W=>{const z=M.id===W?M:M.querySelector?M.querySelector(`#${W}`):null;z&&T(z)})})})});return L.observe(document.documentElement||document.body,{childList:!0,subtree:!0}),{attach:T,disconnect:()=>{L.disconnect(),document.querySelectorAll('div[style*="flex-wrap"]').forEach(w=>{typeof w._cleanup=="function"&&w._cleanup()})}}}}Uo();function jo(){Wi(),Yi()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>setTimeout(jo,0),{once:!0}):jo()})();
