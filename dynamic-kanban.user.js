// ==UserScript==
// @name         Dynamic Kanban Script
// @namespace    http://tampermonkey.net/
// @version      5.11.1
// @description  Filters, highlights and swimlanes for the Kanban boards
// @author       Burhan Kiran
// @match        https://projekte.sitegeist.de/*
// @updateURL    https://raw.githubusercontent.com/Devclaim/dynamic-kanban/main/dynamic-kanban.user.js
// @downloadURL  https://raw.githubusercontent.com/Devclaim/dynamic-kanban/main/dynamic-kanban.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function(){"use strict";(function(t){try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(t)),(document.head||document.documentElement).appendChild(r)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})('/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-200:oklch(88.5% .062 18.334);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-yellow-300:oklch(90.5% .182 98.111);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-700:oklch(55.4% .135 66.442);--color-green-500:oklch(72.3% .219 149.579);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-blue-400:oklch(70.7% .165 254.624);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{#app{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}#app,#app *,#app :after,#app :before,#app ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}#app ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}#app hr{height:0;color:inherit;border-top-width:1px}#app abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}#app h1,#app h2,#app h3,#app h4,#app h5,#app h6{font-size:inherit;font-weight:inherit}#app a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}#app b,#app strong{font-weight:bolder}#app code,#app kbd,#app samp,#app pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}#app small{font-size:80%}#app sub,#app sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}#app sub{bottom:-.25em}#app sup{top:-.5em}#app table{text-indent:0;border-color:inherit;border-collapse:collapse}#app :-moz-focusring{outline:auto}#app progress{vertical-align:baseline}#app summary{display:list-item}#app ol,#app ul,#app menu{list-style:none}#app img,#app svg,#app video,#app canvas,#app audio,#app iframe,#app embed,#app object{vertical-align:middle;display:block}#app img,#app video{max-width:100%;height:auto}#app button,#app input,#app select,#app optgroup,#app textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}#app ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}#app :where(select:is([multiple],[size])) optgroup{font-weight:bolder}#app :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}#app ::file-selector-button{margin-inline-end:4px}#app ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){#app ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){#app ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}#app textarea{resize:vertical}#app ::-webkit-search-decoration{-webkit-appearance:none}#app ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}#app ::-webkit-datetime-edit{display:inline-flex}#app ::-webkit-datetime-edit-fields-wrapper{padding:0}#app ::-webkit-datetime-edit{padding-block:0}#app ::-webkit-datetime-edit-year-field{padding-block:0}#app ::-webkit-datetime-edit-month-field{padding-block:0}#app ::-webkit-datetime-edit-day-field{padding-block:0}#app ::-webkit-datetime-edit-hour-field{padding-block:0}#app ::-webkit-datetime-edit-minute-field{padding-block:0}#app ::-webkit-datetime-edit-second-field{padding-block:0}#app ::-webkit-datetime-edit-millisecond-field{padding-block:0}#app ::-webkit-datetime-edit-meridiem-field{padding-block:0}#app :-moz-ui-invalid{box-shadow:none}#app button,#app input:where([type=button],[type=reset],[type=submit]){appearance:button}#app ::file-selector-button{appearance:button}#app ::-webkit-inner-spin-button{height:auto}#app ::-webkit-outer-spin-button{height:auto}#app [hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.\\!pointer-events-none{pointer-events:none!important}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-18{bottom:calc(var(--spacing)*18)}.left-0{left:calc(var(--spacing)*0)}.left-2{left:calc(var(--spacing)*2)}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.size-2{width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.\\!h-full{height:100%!important}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-\\[80\\%\\]{height:80%}.h-\\[calc\\(100vh-8rem\\)\\]{height:calc(100vh - 8rem)}.h-fit{height:fit-content}.h-full{height:100%}.h-screen{height:100vh}.\\!max-h-full{max-height:100%!important}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing)*0)}.min-h-screen{min-height:100vh}.\\!w-full{width:100%!important}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-6{width:calc(var(--spacing)*6)}.w-10{width:calc(var(--spacing)*10)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-80{width:calc(var(--spacing)*80)}.w-\\[750px\\]{width:750px}.w-fit{width:fit-content}.w-full{width:100%}.w-screen{width:100vw}.max-w-\\[90\\%\\]{max-width:90%}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.border-collapse{border-collapse:collapse}.border-separate{border-collapse:separate}.\\[border-spacing\\:0\\.5rem\\]{border-spacing:.5rem}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-4{--tw-translate-x:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-move{cursor:move}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.\\!resize-none{resize:none!important}.resize-none{resize:none}.list-decimal{list-style-type:decimal}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}:where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}:where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.\\!rounded{border-radius:.25rem!important}.\\!rounded-full{border-radius:3.40282e38px!important}.\\!rounded-xl{border-radius:var(--radius-xl)!important}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-tl{border-top-left-radius:.25rem}.rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.\\!border-0{border-style:var(--tw-border-style)!important;border-width:0!important}.\\!border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-4{border-style:var(--tw-border-style);border-width:4px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.\\!border-dashed{--tw-border-style:dashed!important;border-style:dashed!important}.\\!border-none{--tw-border-style:none!important;border-style:none!important}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.\\!border-gray-700{border-color:var(--color-gray-700)!important}.border-\\[var\\(--border-color\\)\\]{border-color:var(--border-color)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-700{border-color:var(--color-gray-700)}.border-gray-800{border-color:var(--color-gray-800)}.border-yellow-700{border-color:var(--color-yellow-700)}.\\!bg-gray-700{background-color:var(--color-gray-700)!important}.\\!bg-gray-900{background-color:var(--color-gray-900)!important}.\\!bg-green-800{background-color:var(--color-green-800)!important}.\\!bg-red-900{background-color:var(--color-red-900)!important}.\\!bg-transparent{background-color:#0000!important}.bg-blue-400{background-color:var(--color-blue-400)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-gray-600{background-color:var(--color-gray-600)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-700\\!{background-color:var(--color-gray-700)!important}.bg-gray-700\\/30{background-color:#3641534d}@supports (color:color-mix(in lab,red,red)){.bg-gray-700\\/30{background-color:color-mix(in oklab,var(--color-gray-700)30%,transparent)}}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-800{background-color:var(--color-green-800)}.bg-purple-700{background-color:var(--color-purple-700)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-900{background-color:var(--color-red-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.fill-current{fill:currentColor}.\\!p-0{padding:calc(var(--spacing)*0)!important}.\\!p-2{padding:calc(var(--spacing)*2)!important}.\\!p-3{padding:calc(var(--spacing)*3)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.\\!px-3{padding-inline:calc(var(--spacing)*3)!important}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5\\!{padding-inline:calc(var(--spacing)*2.5)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.\\!py-1{padding-block:calc(var(--spacing)*1)!important}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\!{padding-block:calc(var(--spacing)*1)!important}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-2{padding-top:calc(var(--spacing)*2)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.\\!text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-wrap{text-wrap:wrap}.break-all{word-break:break-all}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.whitespace-pre-wrap{white-space:pre-wrap}.\\!text-white{color:var(--color-white)!important}.\\!text-yellow-300{color:var(--color-yellow-300)!important}.text-black{color:var(--color-black)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-red-400{color:var(--color-red-400)}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-400{color:var(--color-yellow-400)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.\\!opacity-20{opacity:.2!important}.opacity-20{opacity:.2}.\\!shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.\\!shadow-none{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[--border-color\\:\\#703ba1\\]{--border-color:#703ba1}.\\[--prio-color\\:\\#b31814\\]{--prio-color:#b31814}:where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ring-inset{--tw-ring-inset:inset}@media (hover:hover){.group-hover\\:-rotate-45:is(:where(.group):hover *){rotate:-45deg}}.peer-focus\\:hidden:is(:where(.peer):focus~*){display:none}@media (hover:hover){.hover\\:\\!bg-gray-600:hover{background-color:var(--color-gray-600)!important}.hover\\:\\!bg-gray-800:hover{background-color:var(--color-gray-800)!important}.hover\\:\\!bg-green-700:hover{background-color:var(--color-green-700)!important}.hover\\:\\!bg-red-800:hover{background-color:var(--color-red-800)!important}.hover\\:bg-gray-600:hover{background-color:var(--color-gray-600)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-green-800\\!:hover{background-color:var(--color-green-800)!important}.hover\\:text-white:hover{color:var(--color-white)}}.focus\\:\\!border-gray-500:focus{border-color:var(--color-gray-500)!important}.focus\\:\\!bg-gray-600:focus{background-color:var(--color-gray-600)!important}.focus\\:bg-gray-700:focus{background-color:var(--color-gray-700)}.focus\\:bg-gray-800:focus{background-color:var(--color-gray-800)}.focus\\:\\!outline-none:focus{--tw-outline-style:none!important;outline-style:none!important}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}}ul{padding-left:1.5rem;list-style:outside}ol{padding-left:1.5rem;list-style:decimal}textarea,pre{scrollbar-width:thin;scrollbar-color:#374151 #111827}textarea::-webkit-scrollbar{height:calc(var(--spacing)*2);width:calc(var(--spacing)*2)}.custom-slider::-webkit-scrollbar{height:calc(var(--spacing)*2);width:calc(var(--spacing)*2)}textarea::-webkit-scrollbar-track{border-radius:var(--radius-md);background-color:var(--color-gray-900)}.custom-slider::-webkit-scrollbar-track{border-radius:var(--radius-md);background-color:var(--color-gray-900)}textarea::-webkit-scrollbar-thumb{border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-gray-900);background-color:var(--color-gray-700)}.custom-slider::-webkit-scrollbar-thumb{border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:2px;border-color:var(--color-gray-900);background-color:var(--color-gray-700)}textarea::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-600)}.custom-slider::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-600)}.custom-color-swatch::-webkit-color-swatch{border:none;border-radius:15px}.custom-color-swatch::-moz-color-swatch{border:none;border-radius:15px}.highlight-background{background-color:var(--border-color)!important}@supports (color:color-mix(in lab,red,red)){.highlight-background{background-color:color-mix(in srgb,var(--border-color)20%,white 75%)!important}}.highlight-badge{position:relative}.highlight-badge:after{--f:.5em;--r:.8em;--c:var(--border-color);content:"IT";top:15px;right:calc(-1*var(--f));color:#fff;background:var(--c);border-bottom:var(--f)solid #00000054;border-left:var(--r)solid transparent;clip-path:polygon(0 0,100% 0,100% calc(100% - var(--f)),calc(100% - var(--f))100%,calc(100% - var(--f))calc(100% - var(--f)),0 calc(100% - var(--f)),var(--r)calc(50% - var(--f)/2));pointer-events:none;white-space:nowrap;z-index:2;padding-inline:.7em;font-size:16px;font-weight:700;line-height:2;position:absolute}.prio-badge{position:relative}.prio-badge:before{--f:.5em;--r:.8em;--c:var(--prio-color);content:"H";top:15px;left:calc(-1*var(--f));color:#fff;background:var(--c);border-bottom:var(--f)solid #00000054;border-right:var(--r)solid transparent;clip-path:polygon(0 0,0 calc(100% - var(--f)),var(--f)100%,var(--f)calc(100% - var(--f)),100% calc(100% - var(--f)),calc(100% - var(--r))calc(50% - var(--f)/2),100% 0);pointer-events:none;white-space:nowrap;z-index:2;padding-inline:.7em;font-size:16px;font-weight:700;line-height:2;position:absolute}.sortable-chosen{filter:brightness(80%);opacity:.5!important}.sortable-ghost{opacity:.1!important}.collapse{visibility:inherit!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}')})();
(function(){"use strict";function dn(e=location.pathname){return/\/agile\/board/.test(e)||/^\/issues\/\d+/.test(e)}function wr(e){if(!e||e==="classic")return!1;const t=document.documentElement,r=document.getElementById("dk-clean-theme");if(r)return document.head&&r!==document.head.lastElementChild&&document.head.appendChild(r),!0;t.classList.add("dk-clean");const n=a=>{t.classList.toggle("dk-dark",a),t.classList.toggle("dk-light",!a)};if(e==="clean-auto"){const a=window.matchMedia("(prefers-color-scheme: dark)");n(a.matches),a.addEventListener("change",i=>n(i.matches))}else n(e==="clean-dark");const o=document.createElement("style");return o.id="dk-clean-theme",o.textContent=Ro,(document.head||t).appendChild(o),!0}const Ro=`
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
			html.dk-clean .dk-id { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; flex: none; }
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
			html.dk-dark { --dk-hover-shadow: 0 6px 18px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.04); }
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
`;function jo(){if(dn())try{const e=JSON.parse(localStorage.getItem("dynamic-kanban-config")||"{}"),t=Array.isArray(e.profiles)?[...e.profiles]:[],r=JSON.parse(localStorage.getItem("dynamic-kanban-local-profiles")||"[]");(Array.isArray(r)?r:[]).forEach(a=>{const i=t.findIndex(l=>l.name===a.name);i>=0?t[i]=a:t.push(a)});const n=JSON.parse(localStorage.getItem("kanban_active_filters")||"{}"),o=t[n.currentProfileIndex]||t[0];wr(o?.cardStyle||"classic")}catch{}}var Ut,Z,un,Xe,pn,mn,hn,fn,_r,Er,Cr,yt={},gn=[],Fo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wt=Array.isArray;function ze(e,t){for(var r in t)e[r]=t[r];return e}function Sr(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ho(e,t,r){var n,o,a,i={};for(a in t)a=="key"?n=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?Ut.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return Yt(e,i,n,o,null)}function Yt(e,t,r,n,o){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++un,__i:-1,__u:0};return o==null&&Z.vnode!=null&&Z.vnode(a),a}function Ve(e){return e.children}function Jt(e,t){this.props=e,this.context=t}function lt(e,t){if(t==null)return e.__?lt(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?lt(e):null}function bn(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return bn(e)}}function vn(e){(!e.__d&&(e.__d=!0)&&Xe.push(e)&&!Xt.__r++||pn!=Z.debounceRendering)&&((pn=Z.debounceRendering)||mn)(Xt)}function Xt(){for(var e,t,r,n,o,a,i,l=1;Xe.length;)Xe.length>l&&Xe.sort(hn),e=Xe.shift(),l=Xe.length,e.__d&&(r=void 0,o=(n=(t=e).__v).__e,a=[],i=[],t.__P&&((r=ze({},n)).__v=n.__v+1,Z.vnode&&Z.vnode(r),Tr(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,a,o??lt(n),!!(32&n.__u),i),r.__v=n.__v,r.__.__k[r.__i]=r,_n(a,r,i),r.__e!=o&&bn(r)));Xt.__r=0}function kn(e,t,r,n,o,a,i,l,u,s,c){var p,f,k,_,S,m,b=n&&n.__k||gn,v=t.length;for(u=Go(r,t,b,u,v),p=0;p<v;p++)(k=r.__k[p])!=null&&(f=k.__i==-1?yt:b[k.__i]||yt,k.__i=p,m=Tr(e,k,f,o,a,i,l,u,s,c),_=k.__e,k.ref&&f.ref!=k.ref&&(f.ref&&Lr(f.ref,null,k),c.push(k.ref,k.__c||_,k)),S==null&&_!=null&&(S=_),4&k.__u||f.__k===k.__k?u=xn(k,u,e):typeof k.type=="function"&&m!==void 0?u=m:_&&(u=_.nextSibling),k.__u&=-7);return r.__e=S,u}function Go(e,t,r,n,o){var a,i,l,u,s,c=r.length,p=c,f=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=a+f,(i=e.__k[a]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Yt(null,i,null,null,null):Wt(i)?Yt(Ve,{children:i},null,null,null):i.constructor==null&&i.__b>0?Yt(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,(s=i.__i=qo(i,r,u,p))!=-1&&(p--,(l=r[s])&&(l.__u|=2)),l==null||l.__v==null?(s==-1&&(o>c?f--:o<c&&f++),typeof i.type!="function"&&(i.__u|=4)):s!=u&&(s==u-1?f--:s==u+1?f++:(s>u?f--:f++,i.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<c;a++)(l=r[a])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=lt(l)),Cn(l,l));return n}function xn(e,t,r){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,t=xn(n[o],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=lt(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function qo(e,t,r,n){var o,a,i,l=e.key,u=e.type,s=t[r],c=s!=null&&(2&s.__u)==0;if(s===null&&e.key==null||c&&l==s.key&&u==s.type)return r;if(n>(c?1:0)){for(o=r-1,a=r+1;o>=0||a<t.length;)if((s=t[i=o>=0?o--:a++])!=null&&(2&s.__u)==0&&l==s.key&&u==s.type)return i}return-1}function yn(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Fo.test(t)?r:r+"px"}function Vt(e,t,r,n,o){var a,i;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||yn(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||yn(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(fn,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n?r.u=n.u:(r.u=_r,e.addEventListener(t,a?Cr:Er,a)):e.removeEventListener(t,a?Cr:Er,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function wn(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=_r++;else if(t.t<r.u)return;return r(Z.event?Z.event(t):t)}}}function Tr(e,t,r,n,o,a,i,l,u,s){var c,p,f,k,_,S,m,b,v,B,F,W,$,ee,T,G,me,V=t.type;if(t.constructor!=null)return null;128&r.__u&&(u=!!(32&r.__u),a=[l=t.__e=r.__e]),(c=Z.__b)&&c(t);e:if(typeof V=="function")try{if(b=t.props,v="prototype"in V&&V.prototype.render,B=(c=V.contextType)&&n[c.__c],F=c?B?B.props.value:c.__:n,r.__c?m=(p=t.__c=r.__c).__=p.__E:(v?t.__c=p=new V(b,F):(t.__c=p=new Jt(b,F),p.constructor=V,p.render=Uo),B&&B.sub(p),p.props=b,p.state||(p.state={}),p.context=F,p.__n=n,f=p.__d=!0,p.__h=[],p._sb=[]),v&&p.__s==null&&(p.__s=p.state),v&&V.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=ze({},p.__s)),ze(p.__s,V.getDerivedStateFromProps(b,p.__s))),k=p.props,_=p.state,p.__v=t,f)v&&V.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),v&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(v&&V.getDerivedStateFromProps==null&&b!==k&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(b,F),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(b,p.__s,F)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(p.props=b,p.state=p.__s,p.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(K){K&&(K.__=t)}),W=0;W<p._sb.length;W++)p.__h.push(p._sb[W]);p._sb=[],p.__h.length&&i.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(b,p.__s,F),v&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(k,_,S)})}if(p.context=F,p.props=b,p.__P=e,p.__e=!1,$=Z.__r,ee=0,v){for(p.state=p.__s,p.__d=!1,$&&$(t),c=p.render(p.props,p.state,p.context),T=0;T<p._sb.length;T++)p.__h.push(p._sb[T]);p._sb=[]}else do p.__d=!1,$&&$(t),c=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++ee<25);p.state=p.__s,p.getChildContext!=null&&(n=ze(ze({},n),p.getChildContext())),v&&!f&&p.getSnapshotBeforeUpdate!=null&&(S=p.getSnapshotBeforeUpdate(k,_)),G=c,c!=null&&c.type===Ve&&c.key==null&&(G=En(c.props.children)),l=kn(e,Wt(G)?G:[G],t,r,n,o,a,i,l,u,s),p.base=t.__e,t.__u&=-161,p.__h.length&&i.push(p),m&&(p.__E=p.__=null)}catch(K){if(t.__v=null,u||a!=null)if(K.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;a[a.indexOf(l)]=null,t.__e=l}else{for(me=a.length;me--;)Sr(a[me]);Ar(t)}else t.__e=r.__e,t.__k=r.__k,K.then||Ar(t);Z.__e(K,t,r)}else a==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=$o(r.__e,t,r,n,o,a,i,u,s);return(c=Z.diffed)&&c(t),128&t.__u?void 0:l}function Ar(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ar)}function _n(e,t,r){for(var n=0;n<r.length;n++)Lr(r[n],r[++n],r[++n]);Z.__c&&Z.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){Z.__e(a,o.__v)}})}function En(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Wt(e)?e.map(En):ze({},e)}function $o(e,t,r,n,o,a,i,l,u){var s,c,p,f,k,_,S,m=r.props,b=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(s=0;s<a.length;s++)if((k=a[s])&&"setAttribute"in k==!!v&&(v?k.localName==v:k.nodeType==3)){e=k,a[s]=null;break}}if(e==null){if(v==null)return document.createTextNode(b);e=document.createElementNS(o,v,b.is&&b),l&&(Z.__m&&Z.__m(t,a),l=!1),a=null}if(v==null)m===b||l&&e.data==b||(e.data=b);else{if(a=a&&Ut.call(e.childNodes),m=r.props||yt,!l&&a!=null)for(m={},s=0;s<e.attributes.length;s++)m[(k=e.attributes[s]).name]=k.value;for(s in m)if(k=m[s],s!="children"){if(s=="dangerouslySetInnerHTML")p=k;else if(!(s in b)){if(s=="value"&&"defaultValue"in b||s=="checked"&&"defaultChecked"in b)continue;Vt(e,s,null,k,o)}}for(s in b)k=b[s],s=="children"?f=k:s=="dangerouslySetInnerHTML"?c=k:s=="value"?_=k:s=="checked"?S=k:l&&typeof k!="function"||m[s]===k||Vt(e,s,k,m[s],o);if(c)l||p&&(c.__html==p.__html||c.__html==e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(p&&(e.innerHTML=""),kn(t.type=="template"?e.content:e,Wt(f)?f:[f],t,r,n,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:r.__k&&lt(r,0),l,u),a!=null)for(s=a.length;s--;)Sr(a[s]);l||(s="value",v=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[s]||v=="progress"&&!_||v=="option"&&_!=m[s])&&Vt(e,s,_,m[s],o),s="checked",S!=null&&S!=e[s]&&Vt(e,s,S,m[s],o))}return e}function Lr(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){Z.__e(o,r)}}function Cn(e,t,r){var n,o;if(Z.unmount&&Z.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||Lr(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){Z.__e(a,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Cn(n[o],t,r||typeof e.type!="function");r||Sr(e.__e),e.__c=e.__=e.__e=void 0}function Uo(e,t,r){return this.constructor(e,r)}function Wo(e,t,r){var n,o,a,i;t==document&&(t=document.documentElement),Z.__&&Z.__(e,t),o=(n=!1)?null:t.__k,a=[],i=[],Tr(t,e=t.__k=Ho(Ve,null,[e]),o||yt,yt,t.namespaceURI,o?null:t.firstChild?Ut.call(t.childNodes):null,a,o?o.__e:t.firstChild,n,i),_n(a,e,i)}Ut=gn.slice,Z={__e:function(e,t,r,n){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),i=o.__d),i)return o.__E=o}catch(l){e=l}throw e}},un=0,Jt.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ze({},this.state),typeof e=="function"&&(e=e(ze({},r),this.props)),e&&ze(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),vn(this))},Jt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),vn(this))},Jt.prototype.render=Ve,Xe=[],mn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hn=function(e,t){return e.__v.__b-t.__v.__b},Xt.__r=0,fn=/(PointerCapture)$|Capture$/i,_r=0,Er=wn(!1),Cr=wn(!0);var Yo=0;function d(e,t,r,n,o,a){t||(t={});var i,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?i=t[l]:u[l]=t[l];var s={type:e,props:u,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Yo,__i:-1,__u:0,__source:o,__self:a};if(typeof e=="function"&&(i=e.defaultProps))for(l in i)u[l]===void 0&&(u[l]=i[l]);return Z.vnode&&Z.vnode(s),s}var wt,se,Ir,Sn,_t=0,Tn=[],de=Z,An=de.__b,Ln=de.__r,In=de.diffed,Dn=de.__c,Nn=de.unmount,Pn=de.__;function Dr(e,t){de.__h&&de.__h(se,e,_t||t),_t=0;var r=se.__H||(se.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function xe(e){return _t=1,Jo(zn,e)}function Jo(e,t,r){var n=Dr(wt++,2);if(n.t=e,!n.__c&&(n.__=[zn(void 0,t),function(l){var u=n.__N?n.__N[0]:n.__[0],s=n.t(u,l);u!==s&&(n.__N=[s,n.__[1]],n.__c.setState({}))}],n.__c=se,!se.__f)){var o=function(l,u,s){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(f){return!!f.__c});if(c.every(function(f){return!f.__N}))return!a||a.call(this,l,u,s);var p=n.__c.props!==l;return c.forEach(function(f){if(f.__N){var k=f.__[0];f.__=f.__N,f.__N=void 0,k!==f.__[0]&&(p=!0)}}),a&&a.call(this,l,u,s)||p};se.__f=!0;var a=se.shouldComponentUpdate,i=se.componentWillUpdate;se.componentWillUpdate=function(l,u,s){if(this.__e){var c=a;a=void 0,o(l,u,s),a=c}i&&i.call(this,l,u,s)},se.shouldComponentUpdate=o}return n.__N||n.__}function Et(e,t){var r=Dr(wt++,3);!de.__s&&Mn(r.__H,t)&&(r.__=e,r.u=t,se.__H.__h.push(r))}function Ct(e){return _t=5,Pe(function(){return{current:e}},[])}function Pe(e,t){var r=Dr(wt++,7);return Mn(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Nr(e,t){return _t=8,Pe(function(){return e},t)}function Xo(){for(var e;e=Tn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Kt),e.__H.__h.forEach(Pr),e.__H.__h=[]}catch(t){e.__H.__h=[],de.__e(t,e.__v)}}de.__b=function(e){se=null,An&&An(e)},de.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pn&&Pn(e,t)},de.__r=function(e){Ln&&Ln(e),wt=0;var t=(se=e.__c).__H;t&&(Ir===se?(t.__h=[],se.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Kt),t.__h.forEach(Pr),t.__h=[],wt=0)),Ir=se},de.diffed=function(e){In&&In(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Tn.push(t)!==1&&Sn===de.requestAnimationFrame||((Sn=de.requestAnimationFrame)||Vo)(Xo)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Ir=se=null},de.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Kt),r.__h=r.__h.filter(function(n){return!n.__||Pr(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],de.__e(n,r.__v)}}),Dn&&Dn(e,t)},de.unmount=function(e){Nn&&Nn(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Kt(n)}catch(o){t=o}}),r.__H=void 0,t&&de.__e(t,r.__v))};var On=typeof requestAnimationFrame=="function";function Vo(e){var t,r=function(){clearTimeout(n),On&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);On&&(t=requestAnimationFrame(r))}function Kt(e){var t=se,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),se=t}function Pr(e){var t=se;e.__c=e.__(),se=t}function Mn(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function zn(e,t){return typeof t=="function"?t(e):t}const Or="-",Ko=e=>{const t=Zo(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:i=>{const l=i.split(Or);return l[0]===""&&l.length!==1&&l.shift(),Bn(l,t)||Qo(i)},getConflictingClassGroupIds:(i,l)=>{const u=r[i]||[];return l&&n[i]?[...u,...n[i]]:u}}},Bn=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),o=n?Bn(e.slice(1),n):void 0;if(o)return o;if(t.validators.length===0)return;const a=e.join(Or);return t.validators.find(({validator:i})=>i(a))?.classGroupId},Rn=/^\[(.+)\]$/,Qo=e=>{if(Rn.test(e)){const t=Rn.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Zo=e=>{const{theme:t,classGroups:r}=e,n={nextPart:new Map,validators:[]};for(const o in r)Mr(r[o],n,o,t);return n},Mr=(e,t,r,n)=>{e.forEach(o=>{if(typeof o=="string"){const a=o===""?t:jn(t,o);a.classGroupId=r;return}if(typeof o=="function"){if(ea(o)){Mr(o(n),t,r,n);return}t.validators.push({validator:o,classGroupId:r});return}Object.entries(o).forEach(([a,i])=>{Mr(i,jn(t,a),r,n)})})},jn=(e,t)=>{let r=e;return t.split(Or).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},ea=e=>e.isThemeGetter,ta=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const o=(a,i)=>{r.set(a,i),t++,t>e&&(t=0,n=r,r=new Map)};return{get(a){let i=r.get(a);if(i!==void 0)return i;if((i=n.get(a))!==void 0)return o(a,i),i},set(a,i){r.has(a)?r.set(a,i):o(a,i)}}},zr="!",Br=":",ra=Br.length,na=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=o=>{const a=[];let i=0,l=0,u=0,s;for(let _=0;_<o.length;_++){let S=o[_];if(i===0&&l===0){if(S===Br){a.push(o.slice(u,_)),u=_+ra;continue}if(S==="/"){s=_;continue}}S==="["?i++:S==="]"?i--:S==="("?l++:S===")"&&l--}const c=a.length===0?o:o.substring(u),p=oa(c),f=p!==c,k=s&&s>u?s-u:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:k}};if(t){const o=t+Br,a=n;n=i=>i.startsWith(o)?a(i.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:i,maybePostfixModifierPosition:void 0}}if(r){const o=n;n=a=>r({className:a,parseClassName:o})}return n},oa=e=>e.endsWith(zr)?e.substring(0,e.length-1):e.startsWith(zr)?e.substring(1):e,aa=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const o=[];let a=[];return n.forEach(i=>{i[0]==="["||t[i]?(o.push(...a.sort(),i),a=[]):a.push(i)}),o.push(...a.sort()),o}},ia=e=>({cache:ta(e.cacheSize),parseClassName:na(e),sortModifiers:aa(e),...Ko(e)}),la=/\s+/,sa=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:o,sortModifiers:a}=t,i=[],l=e.trim().split(la);let u="";for(let s=l.length-1;s>=0;s-=1){const c=l[s],{isExternal:p,modifiers:f,hasImportantModifier:k,baseClassName:_,maybePostfixModifierPosition:S}=r(c);if(p){u=c+(u.length>0?" "+u:u);continue}let m=!!S,b=n(m?_.substring(0,S):_);if(!b){if(!m){u=c+(u.length>0?" "+u:u);continue}if(b=n(_),!b){u=c+(u.length>0?" "+u:u);continue}m=!1}const v=a(f).join(":"),B=k?v+zr:v,F=B+b;if(i.includes(F))continue;i.push(F);const W=o(b,m);for(let $=0;$<W.length;++$){const ee=W[$];i.push(B+ee)}u=c+(u.length>0?" "+u:u)}return u};function ca(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Fn(t))&&(n&&(n+=" "),n+=r);return n}const Fn=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Fn(e[n]))&&(r&&(r+=" "),r+=t);return r};function da(e,...t){let r,n,o,a=i;function i(u){const s=t.reduce((c,p)=>p(c),e());return r=ia(s),n=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){const s=n(u);if(s)return s;const c=sa(u,r);return o(u,c),c}return function(){return a(ca.apply(null,arguments))}}const he=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Hn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Gn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ua=/^\d+\/\d+$/,pa=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ma=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ha=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,fa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ga=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,st=e=>ua.test(e),q=e=>!!e&&!Number.isNaN(Number(e)),Ge=e=>!!e&&Number.isInteger(Number(e)),Rr=e=>e.endsWith("%")&&q(e.slice(0,-1)),Be=e=>pa.test(e),ba=()=>!0,va=e=>ma.test(e)&&!ha.test(e),qn=()=>!1,ka=e=>fa.test(e),xa=e=>ga.test(e),ya=e=>!D(e)&&!N(e),wa=e=>ct(e,Jn,qn),D=e=>Hn.test(e),Ke=e=>ct(e,Xn,va),jr=e=>ct(e,Ta,q),$n=e=>ct(e,Wn,qn),_a=e=>ct(e,Yn,xa),Qt=e=>ct(e,Vn,ka),N=e=>Gn.test(e),St=e=>dt(e,Xn),Ea=e=>dt(e,Aa),Un=e=>dt(e,Wn),Ca=e=>dt(e,Jn),Sa=e=>dt(e,Yn),Zt=e=>dt(e,Vn,!0),ct=(e,t,r)=>{const n=Hn.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},dt=(e,t,r=!1)=>{const n=Gn.exec(e);return n?n[1]?t(n[1]):r:!1},Wn=e=>e==="position"||e==="percentage",Yn=e=>e==="image"||e==="url",Jn=e=>e==="length"||e==="size"||e==="bg-size",Xn=e=>e==="length",Ta=e=>e==="number",Aa=e=>e==="family-name",Vn=e=>e==="shadow",La=da(()=>{const e=he("color"),t=he("font"),r=he("text"),n=he("font-weight"),o=he("tracking"),a=he("leading"),i=he("breakpoint"),l=he("container"),u=he("spacing"),s=he("radius"),c=he("shadow"),p=he("inset-shadow"),f=he("text-shadow"),k=he("drop-shadow"),_=he("blur"),S=he("perspective"),m=he("aspect"),b=he("ease"),v=he("animate"),B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],W=()=>[...F(),N,D],$=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto","contain","none"],T=()=>[N,D,u],G=()=>[st,"full","auto",...T()],me=()=>[Ge,"none","subgrid",N,D],V=()=>["auto",{span:["full",Ge,N,D]},Ge,N,D],K=()=>[Ge,"auto",N,D],ie=()=>["auto","min","max","fr",N,D],ge=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Se=()=>["start","end","center","stretch","center-safe","end-safe"],te=()=>["auto",...T()],we=()=>[st,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...T()],z=()=>[e,N,D],bt=()=>[...F(),Un,$n,{position:[N,D]}],qt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],nt=()=>["auto","cover","contain",Ca,wa,{size:[N,D]}],ot=()=>[Rr,St,Ke],be=()=>["","none","full",s,N,D],_e=()=>["",q,St,Ke],Ye=()=>["solid","dashed","dotted","double"],$t=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>[q,Rr,Un,$n],yr=()=>["","none",_,N,D],vt=()=>["none",q,N,D],kt=()=>["none",q,N,D],at=()=>[q,N,D],xt=()=>[st,"full",...T()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Be],breakpoint:[Be],color:[ba],container:[Be],"drop-shadow":[Be],ease:["in","out","in-out"],font:[ya],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Be],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Be],shadow:[Be],spacing:["px",q],text:[Be],"text-shadow":[Be],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",st,D,N,m]}],container:["container"],columns:[{columns:[q,D,N,l]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:W()}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:G()}],"inset-x":[{"inset-x":G()}],"inset-y":[{"inset-y":G()}],start:[{start:G()}],end:[{end:G()}],top:[{top:G()}],right:[{right:G()}],bottom:[{bottom:G()}],left:[{left:G()}],visibility:["visible","invisible","collapse"],z:[{z:[Ge,"auto",N,D]}],basis:[{basis:[st,"full","auto",l,...T()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[q,st,"auto","initial","none",D]}],grow:[{grow:["",q,N,D]}],shrink:[{shrink:["",q,N,D]}],order:[{order:[Ge,"first","last","none",N,D]}],"grid-cols":[{"grid-cols":me()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":me()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ie()}],"auto-rows":[{"auto-rows":ie()}],gap:[{gap:T()}],"gap-x":[{"gap-x":T()}],"gap-y":[{"gap-y":T()}],"justify-content":[{justify:[...ge(),"normal"]}],"justify-items":[{"justify-items":[...Se(),"normal"]}],"justify-self":[{"justify-self":["auto",...Se()]}],"align-content":[{content:["normal",...ge()]}],"align-items":[{items:[...Se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Se(),{baseline:["","last"]}]}],"place-content":[{"place-content":ge()}],"place-items":[{"place-items":[...Se(),"baseline"]}],"place-self":[{"place-self":["auto",...Se()]}],p:[{p:T()}],px:[{px:T()}],py:[{py:T()}],ps:[{ps:T()}],pe:[{pe:T()}],pt:[{pt:T()}],pr:[{pr:T()}],pb:[{pb:T()}],pl:[{pl:T()}],m:[{m:te()}],mx:[{mx:te()}],my:[{my:te()}],ms:[{ms:te()}],me:[{me:te()}],mt:[{mt:te()}],mr:[{mr:te()}],mb:[{mb:te()}],ml:[{ml:te()}],"space-x":[{"space-x":T()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":T()}],"space-y-reverse":["space-y-reverse"],size:[{size:we()}],w:[{w:[l,"screen",...we()]}],"min-w":[{"min-w":[l,"screen","none",...we()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[i]},...we()]}],h:[{h:["screen","lh",...we()]}],"min-h":[{"min-h":["screen","lh","none",...we()]}],"max-h":[{"max-h":["screen","lh",...we()]}],"font-size":[{text:["base",r,St,Ke]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,N,jr]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Rr,D]}],"font-family":[{font:[Ea,D,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,N,D]}],"line-clamp":[{"line-clamp":[q,"none",N,jr]}],leading:[{leading:[a,...T()]}],"list-image":[{"list-image":["none",N,D]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",N,D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ye(),"wavy"]}],"text-decoration-thickness":[{decoration:[q,"from-font","auto",N,Ke]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[q,"auto",N,D]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N,D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N,D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:bt()}],"bg-repeat":[{bg:qt()}],"bg-size":[{bg:nt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ge,N,D],radial:["",N,D],conic:[Ge,N,D]},Sa,_a]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:ot()}],"gradient-via-pos":[{via:ot()}],"gradient-to-pos":[{to:ot()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:_e()}],"border-w-x":[{"border-x":_e()}],"border-w-y":[{"border-y":_e()}],"border-w-s":[{"border-s":_e()}],"border-w-e":[{"border-e":_e()}],"border-w-t":[{"border-t":_e()}],"border-w-r":[{"border-r":_e()}],"border-w-b":[{"border-b":_e()}],"border-w-l":[{"border-l":_e()}],"divide-x":[{"divide-x":_e()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":_e()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ye(),"hidden","none"]}],"divide-style":[{divide:[...Ye(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...Ye(),"none","hidden"]}],"outline-offset":[{"outline-offset":[q,N,D]}],"outline-w":[{outline:["",q,St,Ke]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",c,Zt,Qt]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",p,Zt,Qt]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[q,Ke]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":_e()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",f,Zt,Qt]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[q,N,D]}],"mix-blend":[{"mix-blend":[...$t(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":$t()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[q]}],"mask-image-linear-from-pos":[{"mask-linear-from":ce()}],"mask-image-linear-to-pos":[{"mask-linear-to":ce()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":ce()}],"mask-image-t-to-pos":[{"mask-t-to":ce()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":ce()}],"mask-image-r-to-pos":[{"mask-r-to":ce()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":ce()}],"mask-image-b-to-pos":[{"mask-b-to":ce()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":ce()}],"mask-image-l-to-pos":[{"mask-l-to":ce()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":ce()}],"mask-image-x-to-pos":[{"mask-x-to":ce()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":ce()}],"mask-image-y-to-pos":[{"mask-y-to":ce()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[N,D]}],"mask-image-radial-from-pos":[{"mask-radial-from":ce()}],"mask-image-radial-to-pos":[{"mask-radial-to":ce()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":F()}],"mask-image-conic-pos":[{"mask-conic":[q]}],"mask-image-conic-from-pos":[{"mask-conic-from":ce()}],"mask-image-conic-to-pos":[{"mask-conic-to":ce()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:bt()}],"mask-repeat":[{mask:qt()}],"mask-size":[{mask:nt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",N,D]}],filter:[{filter:["","none",N,D]}],blur:[{blur:yr()}],brightness:[{brightness:[q,N,D]}],contrast:[{contrast:[q,N,D]}],"drop-shadow":[{"drop-shadow":["","none",k,Zt,Qt]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",q,N,D]}],"hue-rotate":[{"hue-rotate":[q,N,D]}],invert:[{invert:["",q,N,D]}],saturate:[{saturate:[q,N,D]}],sepia:[{sepia:["",q,N,D]}],"backdrop-filter":[{"backdrop-filter":["","none",N,D]}],"backdrop-blur":[{"backdrop-blur":yr()}],"backdrop-brightness":[{"backdrop-brightness":[q,N,D]}],"backdrop-contrast":[{"backdrop-contrast":[q,N,D]}],"backdrop-grayscale":[{"backdrop-grayscale":["",q,N,D]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[q,N,D]}],"backdrop-invert":[{"backdrop-invert":["",q,N,D]}],"backdrop-opacity":[{"backdrop-opacity":[q,N,D]}],"backdrop-saturate":[{"backdrop-saturate":[q,N,D]}],"backdrop-sepia":[{"backdrop-sepia":["",q,N,D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":T()}],"border-spacing-x":[{"border-spacing-x":T()}],"border-spacing-y":[{"border-spacing-y":T()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",N,D]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[q,"initial",N,D]}],ease:[{ease:["linear","initial",b,N,D]}],delay:[{delay:[q,N,D]}],animate:[{animate:["none",v,N,D]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,N,D]}],"perspective-origin":[{"perspective-origin":W()}],rotate:[{rotate:vt()}],"rotate-x":[{"rotate-x":vt()}],"rotate-y":[{"rotate-y":vt()}],"rotate-z":[{"rotate-z":vt()}],scale:[{scale:kt()}],"scale-x":[{"scale-x":kt()}],"scale-y":[{"scale-y":kt()}],"scale-z":[{"scale-z":kt()}],"scale-3d":["scale-3d"],skew:[{skew:at()}],"skew-x":[{"skew-x":at()}],"skew-y":[{"skew-y":at()}],transform:[{transform:[N,D,"","none","gpu","cpu"]}],"transform-origin":[{origin:W()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:xt()}],"translate-x":[{"translate-x":xt()}],"translate-y":[{"translate-y":xt()}],"translate-z":[{"translate-z":xt()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N,D]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N,D]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[q,St,Ke,jr]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}});function Ia(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Kn;function Da(){return Kn||(Kn=1,function(e){(function(){var t={}.hasOwnProperty;function r(){for(var a="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(a=o(a,n(l)))}return a}function n(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var l in a)t.call(a,l)&&a[l]&&(i=o(i,l));return i}function o(a,i){return i?a?a+" "+i:a+i:a}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Fr)),Fr.exports}var Na=Da();const Pa=Ia(Na);function qe(...e){return La(Pa(...e))}function Oa({children:e}){const[t,r]=xe(!1),n=Ct(null),o=Ct(null);return Et(()=>{if(!t)return;function a(l){const u=l.target;n.current&&!n.current.contains(u)&&o.current&&!o.current.contains(u)&&r(!1)}function i(l){l.key==="Escape"&&r(!1)}return document.addEventListener("mousedown",a),document.addEventListener("keydown",i),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",i)}},[t]),d(Ve,{children:[d("button",{ref:o,onClick:()=>r(a=>!a),class:qe("group fixed bottom-4 right-4 z-50 !text-white !p-3 !rounded-full border-none!","!shadow-2xl cursor-pointer !bg-gray-900 hover:!bg-gray-800 transition-all"),"aria-expanded":t,"aria-controls":"floating-panel",children:d("svg",{className:"h-6 w-6 fill-current transition-all group-hover:-rotate-45",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:d("path",{d:`M246.9 82.3L271 67.8C292.6 54.8 317.3 48 342.5 48C379.3 48 414.7 62.6 440.7 
                        88.7L504.6 152.6C519.6 167.6 528 188 528 209.2L528 240.1L547.7 259.8L547.7 259.8C563.3 
                        244.2 588.6 244.2 604.3 259.8C620 275.4 619.9 300.7 604.3 316.4L540.3 380.4C524.7 396
                        499.4 396 483.7 380.4C468 364.8 468.1 339.5 483.7 323.8L464 304L433.1 304C411.9 304 
                        391.5 295.6 376.5 280.6L327.4 231.5C312.4 216.5 304 196.1 304 174.9L304 162.2C304 151 298.1 140.5
                        288.5 134.8L246.9 109.8C236.5 103.6 236.5 88.6 246.9 82.4zM50.7 466.7L272.8 244.6L363.3 335.1L141.2
                        557.2C116.2 582.2 75.7 582.2 50.7 557.2C25.7 532.2 25.7 491.7 50.7 466.7z`})})}),t&&d("div",{id:"floating-panel",ref:n,class:qe("fixed bottom-18 right-4 w-[750px] h-[calc(100vh-8rem)] flex flex-col gap-sm","overflow-y-hidden max-w-[90%] bg-gray-900 text-white p-4 rounded-lg shadow-xl z-40"),style:{minHeight:"200px"},children:e})]})}function Y({onClick:e,children:t,disabled:r,variant:n="gray",className:o="",title:a}){return d("button",{type:"button",disabled:r,title:a,onClick:e,class:qe(["!text-sm !px-3 !py-1 !border-0 !rounded cursor-pointer !shadow-none whitespace-nowrap",n==="gray"&&"!bg-gray-700 hover:!bg-gray-600",n==="green"&&"!bg-green-800 hover:!bg-green-700",n==="red"&&"!bg-red-900 hover:!bg-red-800",r&&"!opacity-20 !pointer-events-none",o]),children:t})}const Tt={profiles:[],tags:[],dynamicTags:[],swimlanes:[],swimlaneGroups:[]},er="dynamic-kanban-config",Hr="dynamic-kanban-config-url",Gr="dynamic-kanban-config-synced-at",tr="dynamic-kanban-config-edit-url",rr="dynamic-kanban-config-remote",nr="dynamic-kanban-config-base";function Qe(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch{return null}}function At(){return localStorage.getItem(Hr)||""}function Qn(e){e?localStorage.setItem(Hr,e):[Hr,Gr,rr,nr,tr].forEach(t=>localStorage.removeItem(t))}function Ma(){const e=Number(localStorage.getItem(Gr));return e?new Date(e):null}function qr(e){if(/\/wiki\/[^/]+\.txt$/.test(e))return e.replace(/\.txt$/,"/edit");const t=e.match(/^https:\/\/gist\.githubusercontent\.com\/([^/]+)\/([^/]+)\/raw\//);if(t)return`https://gist.github.com/${t[1]}/${t[2]}/edit`;const r=e.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/);return r?`https://github.com/${r[1]}/${r[2]}/edit/${r[3]}/${r[4]}`:null}function Zn(){return localStorage.getItem(tr)||""}function za(e){e?localStorage.setItem(tr,e):localStorage.removeItem(tr)}function Ba(){return Zn()||qr(At())}function Ra(e){let t;try{t=JSON.parse(e)}catch{const r=e.indexOf("{"),n=e.lastIndexOf("}");try{t=JSON.parse(e.slice(r,n+1))}catch{throw new Error("the URL does not return a valid JSON config")}}if(!t||typeof t!="object"||Array.isArray(t))throw new Error("the URL does not return a valid JSON config");return Object.keys(Tt).forEach(r=>{Array.isArray(t[r])||(t[r]=[])}),t}async function ja(e){let t;try{t=await fetch(e,{cache:"no-store"})}catch{throw new Error("the URL could not be reached or blocks access from this page")}if(!t.ok)throw new Error(`the server answered with HTTP ${t.status}`);return Ra(await t.text())}const Lt=e=>`${e.boardId}:${e.identifier}`;function It(e){return Array.isArray(e)?`[${e.map(It).join(",")}]`:e&&typeof e=="object"?`{${Object.keys(e).filter(t=>e[t]!==void 0).sort().map(t=>`${JSON.stringify(t)}:${It(e[t])}`).join(",")}}`:JSON.stringify(e)}function eo(e,t){const r=new Set((t?.swimlanes||[]).map(Lt)),n=(e?.swimlanes||[]).filter(o=>r.has(Lt(o))).map(o=>({key:Lt(o),name:o.name,sort:o.sort})).sort((o,a)=>o.key.localeCompare(a.key));return It({...e,profiles:(e?.profiles||[]).filter(o=>o.local!==!0),swimlanes:n})}function Dt(e,t){return eo(e,t)===eo(t,t)}function Fa(e,t){const r=new Set(e.swimlanes.map(Lt));return{...e,swimlanes:[...e.swimlanes,...(t?.swimlanes||[]).filter(n=>!r.has(Lt(n)))]}}function to(e,t){localStorage.setItem(er,JSON.stringify(Fa(e,t))),localStorage.setItem(nr,JSON.stringify(e))}async function ro(e,t=!1){const r=await ja(e),n=Qe(er),o=Qe(nr);localStorage.setItem(Gr,String(Date.now())),localStorage.setItem(rr,JSON.stringify(r));const a=n&&o&&!Dt(n,o);(t||!a||Dt(n,r))&&to(r,n)}function Ha(){const e=Qe(rr);e&&to(e,Qe(er))}function or(){return At()?Qe(rr):null}function Ga(){const e=or();if(!e)return"none";const t=Qe(er);if(Dt(t,e))return"synced";const r=Qe(nr);return r&&!Dt(r,e)?"updates":"edited"}function no(e){const t=or();return!!t&&!Dt(e,t)}function oo(e){const t=or();if(!t||e.local===!0)return null;const r=t.profiles.find(n=>n.name===e.name);return r?It(r)===It(e)?null:"edited":"new"}function qa(){const e=At();e&&ro(e).catch(t=>console.warn("Dynamic Kanban: could not load config from URL",t))}const ar="dynamic-kanban-config",ao="dynamic-kanban-local-profiles";function $r(e){try{return e?JSON.parse(e):null}catch{return null}}function $a(){const e=$r(localStorage.getItem(ao));return Array.isArray(e)?e:[]}function Ur(e){const t=$a();if(!t.length||!e||typeof e!="object")return e;const r=[...e.profiles||[]];return t.forEach(n=>{const o=r.findIndex(a=>a.name===n.name);o>=0?r[o]=n:r.push(n)}),{...e,profiles:r}}function Nt(e){return!e||typeof e!="object"?e:{...e,profiles:(e.profiles||[]).filter(t=>t.local!==!0)}}function Ua(){const e=localStorage.getItem(ar),t=$r(e),r=Ur(t??Tt),[n,o]=xe(r),a=s=>{o(c=>{const p=typeof s=="function"?s(c):s;try{const f=(p?.profiles||[]).filter(S=>S.local===!0);localStorage.setItem(ao,JSON.stringify(f));const k=new Set(f.map(S=>S.name)),_=$r(localStorage.getItem(ar));if(_&&Array.isArray(_.profiles)){const S=_.profiles.filter(m=>!k.has(m.name));S.length!==_.profiles.length&&localStorage.setItem(ar,JSON.stringify({..._,profiles:S}))}}catch{}return p})},i=()=>{localStorage.setItem(ar,JSON.stringify(Nt(n))),location.reload()},l=()=>{a(Ur(or()??Tt))},u=Pe(()=>{if(!t)return!0;try{return JSON.stringify(Nt(n))!==JSON.stringify(Nt(t))}catch{return!1}},[n,e]);return[n,a,i,l,u]}function Te({label:e,value:t,placeholder:r,type:n="text",onChange:o,isColorInput:a=!1,fullWidth:i=!1}){return d("div",{class:qe("flex text-xs text-white gap-2",a?"flex-row items-center":"flex-col",i&&"w-full min-w-0"),onClick:l=>l.stopPropagation(),children:[e&&d("span",{children:e}),d("input",{type:n,value:t,placeholder:r,onInput:l=>{o(l.currentTarget.value)},class:qe("!text-sm !rounded-xl !bg-gray-900 !border-none","focus:outline-none !text-white",a?"!p-0 !bg-transparent custom-color-swatch cursor-pointer":"!p-2 focus:!bg-gray-600",i&&"w-full min-w-0")})]})}function io(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M152 160C174.1 160 192 177.9 192 200L192 248C192 270.1 174.1 288 152 288L104 288C81.9 288 64 270.1 64 248L64 200C64 177.9 81.9 160 104 160L152 160zM344 288L296 288C273.9 288 256 270.1 256 248L256 200C256 177.9 273.9 160 296 160L344 160C366.1 160 384 177.9 384 200L384 248C384 270.1 366.1 288 344 288zM536 288L488 288C465.9 288 448 270.1 448 248L448 200C448 177.9 465.9 160 488 160L536 160C558.1 160 576 177.9 576 200L576 248C576 270.1 558.1 288 536 288zM536 480L488 480C465.9 480 448 462.1 448 440L448 392C448 369.9 465.9 352 488 352L536 352C558.1 352 576 369.9 576 392L576 440C576 462.1 558.1 480 536 480zM344 352C366.1 352 384 369.9 384 392L384 440C384 462.1 366.1 480 344 480L296 480C273.9 480 256 462.1 256 440L256 392C256 369.9 273.9 352 296 352L344 352zM152 480L104 480C81.9 480 64 462.1 64 440L64 392C64 369.9 81.9 352 104 352L152 352C174.1 352 192 369.9 192 392L192 440C192 462.1 174.1 480 152 480z"})})}function Wa(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M416.9 85.2L372 130.1 509.9 268 554.8 223.1C568.4 209.5 576 191.1 576 171.9C576 152.7 568.4 134.3 554.8 120.7L519.2 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.8 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.8C236.9 535.7 250.2 528 260.9 517.2L476 302 338.1 164z"})})}function Re(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",fill:"currentColor",width:"16",height:"16",...e,children:d("path",{d:"M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"})})}function Ya({dynamicTags:e,setConfig:t}){const r=Nr((a,i,l)=>{t(u=>{const s=[...u.dynamicTags];return s[a]={...s[a],[i]:l},{...u,dynamicTags:s}})},[t]),n=a=>{t(i=>{const l=[...i.dynamicTags];return l.splice(a,1),{...i,dynamicTags:l}})};return d("div",{className:"flex flex-col gap-4 h-fit",children:[d("div",{className:"flex gap-4 justify-between",children:[d("span",{className:"text-2xl",children:"Edit Dynamic Tags"}),d(Y,{onClick:()=>{const a={label:"",valueTemplate:"",prompt:"",color:"#555555",gifUrl:""};t(i=>({...i,dynamicTags:[...i.dynamicTags,a]}))},children:"Add Tag +"})]}),d("div",{class:"grid grid-cols-2 gap-3",children:e.map((a,i)=>d("div",{class:"bg-gray-800 rounded-xl p-4 space-y-2",children:d("div",{class:"grid grid-cols-1 gap-2",children:[d(Te,{label:"Label",value:a.label,onChange:l=>r(i,"label",l),placeholder:"Label"}),d(Te,{label:"GIF URL",value:a.gifUrl||"",onChange:l=>r(i,"gifUrl",l),placeholder:"Enter GIF URL"}),d(Te,{label:"Value Template",value:a.valueTemplate,onChange:l=>r(i,"valueTemplate",l),placeholder:"{value} in Label"}),d(Te,{label:"Prompt",value:a.prompt,onChange:l=>r(i,"prompt",l),placeholder:"Prompt"}),d("div",{className:"flex justify-between gap-2",children:[d(Te,{label:"Color",value:a.color,type:"color",onChange:l=>r(i,"color",l),placeholder:"Prompt",isColorInput:!0}),d(Y,{onClick:()=>n(i),variant:"red",children:d(Re,{})})]})]})},i))})]})}function Ja({tags:e,setConfig:t}){const r=Nr((a,i,l)=>{t(u=>{const s=[...u.tags];return s[a]={...s[a],[i]:l},{...u,tags:s}})},[t]),n=a=>{t(i=>{const l=[...i.tags];return l.splice(a,1),{...i,tags:l}})};return d("div",{className:"flex flex-col gap-4 h-fit",children:[d("div",{className:"flex gap-4 justify-between",children:[d("span",{className:"text-2xl",children:"Edit Tags"}),d(Y,{onClick:()=>{const a={label:"",color:"#888888",gifUrl:""};t(i=>({...i,tags:[...i.tags,a]}))},children:"Add Tag +"})]}),d("div",{class:"grid grid-cols-2 gap-3",children:e.map((a,i)=>d("div",{class:"bg-gray-800 rounded-xl p-4 space-y-2",children:d("div",{class:"grid grid-cols-1 gap-2",children:[d(Te,{label:"Label",value:a.label,onChange:l=>r(i,"label",l),placeholder:"Label"}),d(Te,{label:"GIF URL",value:a.gifUrl||"",onChange:l=>r(i,"gifUrl",l),placeholder:"Enter GIF URL"}),d("div",{className:"flex justify-between gap-2",children:[d(Te,{label:"Color",type:"color",value:a.color,onChange:l=>r(i,"color",l),placeholder:"Color",isColorInput:!0}),d(Y,{onClick:()=>n(i),variant:"red",children:d(Re,{})})]})]})},i))})]})}function Xa({profile:e,onChange:t}){return d("div",{class:"grid grid-cols-2 gap-4 select-none",children:[d(Va,{addBorderHighlight:e.addBorderHighlight,addBadgeHighlight:e.addBadgeHighlight,addBgHighlight:e.addBgHighlight,addPriorityBadge:e.addPriorityBadge}),d("div",{className:"flex flex-col gap-3",children:[d(Ze,{enabled:e.addBgHighlight,onClick:()=>t({addBgHighlight:!e.addBgHighlight}),children:"Add Background Highlighting"}),d(Ze,{enabled:e.addBorderHighlight,onClick:()=>t({addBorderHighlight:!e.addBorderHighlight}),children:"Add Border Highlighting"}),d(Ze,{enabled:e.addBadgeHighlight,onClick:()=>t({addBadgeHighlight:!e.addBadgeHighlight}),children:"Add Department Badge"}),d(Ze,{enabled:e.addPriorityBadge,onClick:()=>t({addPriorityBadge:!e.addPriorityBadge}),children:"Add Priority Badge"})]})]})}function Ze({enabled:e,onClick:t,children:r}){return d("div",{class:qe("w-full rounded-md cursor-pointer select-none bg-gray-800 py-2 px-3 h-full",e?"bg-green-800 hover:bg-green-700":" bg-gray-700 hover:bg-gray-600"),onClick:t,children:r})}function Va({addBorderHighlight:e=!1,addBgHighlight:t=!1,addBadgeHighlight:r=!1,addPriorityBadge:n=!1}){return d("div",{className:qe("w-full h-full flex flex-col gap-3 relative rounded-md p-4 border-4 [--border-color:#703ba1] [--prio-color:#b31814]",t?"highlight-background":"bg-gray-200",e?"border-[var(--border-color)]":"border-gray-800",r&&"highlight-badge",n&&"prio-badge"),children:[d("span",{className:qe("bg-white rounded px-2 py-1 w-full cursor-default","text-center text-gray-700 border border-gray-300"),children:"Beispielprojekt"}),d("div",{className:"flex flex-col gap-sm",children:[d("span",{class:"font-bold text-gray-800",children:"#12345: Navigation"}),d("span",{class:"text-gray-700",children:[d("span",{class:"font-semibold",children:"Aktualisiert:"})," 23.07.2025 10:32"]}),d("span",{class:"text-gray-700",children:[d("span",{class:"font-semibold",children:"Tags:"})," ",d("span",{class:"bg-purple-700 text-white px-2 rounded",children:"27 Std"})]})]})]})}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function lo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lo(Object(r),!0).forEach(function(n){Ka(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lo(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ir(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ir=function(t){return typeof t}:ir=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ir(e)}function Ka(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function Qa(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Za(e,t){if(e==null)return{};var r=Qa(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ei="1.15.6";function Fe(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var He=Fe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pt=Fe(/Edge/i),so=Fe(/firefox/i),Ot=Fe(/safari/i)&&!Fe(/chrome/i)&&!Fe(/android/i),Wr=Fe(/iP(ad|od|hone)/i),co=Fe(/chrome/i)&&Fe(/android/i),uo={capture:!1,passive:!1};function J(e,t,r){e.addEventListener(t,r,!He&&uo)}function U(e,t,r){e.removeEventListener(t,r,!He&&uo)}function lr(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function po(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function De(e,t,r,n){if(e){r=r||document;do{if(t!=null&&(t[0]===">"?e.parentNode===r&&lr(e,t):lr(e,t))||n&&e===r)return e;if(e===r)break}while(e=po(e))}return null}var mo=/\s+/g;function Ae(e,t,r){if(e&&t)if(e.classList)e.classList[r?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(mo," ").replace(" "+t+" "," ");e.className=(n+(r?" "+t:"")).replace(mo," ")}}function j(e,t,r){var n=e&&e.style;if(n){if(r===void 0)return document.defaultView&&document.defaultView.getComputedStyle?r=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(r=e.currentStyle),t===void 0?r:r[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=r+(typeof r=="string"?"":"px")}}function ut(e,t){var r="";if(typeof e=="string")r=e;else do{var n=j(e,"transform");n&&n!=="none"&&(r=n+" "+r)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(r)}function ho(e,t,r){if(e){var n=e.getElementsByTagName(t),o=0,a=n.length;if(r)for(;o<a;o++)r(n[o],o);return n}return[]}function Me(){var e=document.scrollingElement;return e||document.documentElement}function ue(e,t,r,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var a,i,l,u,s,c,p;if(e!==window&&e.parentNode&&e!==Me()?(a=e.getBoundingClientRect(),i=a.top,l=a.left,u=a.bottom,s=a.right,c=a.height,p=a.width):(i=0,l=0,u=window.innerHeight,s=window.innerWidth,c=window.innerHeight,p=window.innerWidth),(t||r)&&e!==window&&(o=o||e.parentNode,!He))do if(o&&o.getBoundingClientRect&&(j(o,"transform")!=="none"||r&&j(o,"position")!=="static")){var f=o.getBoundingClientRect();i-=f.top+parseInt(j(o,"border-top-width")),l-=f.left+parseInt(j(o,"border-left-width")),u=i+a.height,s=l+a.width;break}while(o=o.parentNode);if(n&&e!==window){var k=ut(o||e),_=k&&k.a,S=k&&k.d;k&&(i/=S,l/=_,p/=_,c/=S,u=i+c,s=l+p)}return{top:i,left:l,bottom:u,right:s,width:p,height:c}}}function fo(e,t,r){for(var n=$e(e,!0),o=ue(e)[t];n;){var a=ue(n)[r],i=void 0;if(i=o>=a,!i)return n;if(n===Me())break;n=$e(n,!1)}return!1}function pt(e,t,r,n){for(var o=0,a=0,i=e.children;a<i.length;){if(i[a].style.display!=="none"&&i[a]!==R.ghost&&(n||i[a]!==R.dragged)&&De(i[a],r.draggable,e,!1)){if(o===t)return i[a];o++}a++}return null}function Yr(e,t){for(var r=e.lastElementChild;r&&(r===R.ghost||j(r,"display")==="none"||t&&!lr(r,t));)r=r.previousElementSibling;return r||null}function Ie(e,t){var r=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==R.clone&&(!t||lr(e,t))&&r++;return r}function go(e){var t=0,r=0,n=Me();if(e)do{var o=ut(e),a=o.a,i=o.d;t+=e.scrollLeft*a,r+=e.scrollTop*i}while(e!==n&&(e=e.parentNode));return[t,r]}function ti(e,t){for(var r in e)if(e.hasOwnProperty(r)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[r][n])return Number(r)}return-1}function $e(e,t){if(!e||!e.getBoundingClientRect)return Me();var r=e,n=!1;do if(r.clientWidth<r.scrollWidth||r.clientHeight<r.scrollHeight){var o=j(r);if(r.clientWidth<r.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||r.clientHeight<r.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!r.getBoundingClientRect||r===document.body)return Me();if(n||t)return r;n=!0}}while(r=r.parentNode);return Me()}function ri(e,t){if(e&&t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function Jr(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Mt;function bo(e,t){return function(){if(!Mt){var r=arguments,n=this;r.length===1?e.call(n,r[0]):e.apply(n,r),Mt=setTimeout(function(){Mt=void 0},t)}}}function ni(){clearTimeout(Mt),Mt=void 0}function vo(e,t,r){e.scrollLeft+=t,e.scrollTop+=r}function ko(e){var t=window.Polymer,r=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):r?r(e).clone(!0)[0]:e.cloneNode(!0)}function xo(e,t,r){var n={};return Array.from(e.children).forEach(function(o){var a,i,l,u;if(!(!De(o,t.draggable,e,!1)||o.animated||o===r)){var s=ue(o);n.left=Math.min((a=n.left)!==null&&a!==void 0?a:1/0,s.left),n.top=Math.min((i=n.top)!==null&&i!==void 0?i:1/0,s.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,s.right),n.bottom=Math.max((u=n.bottom)!==null&&u!==void 0?u:-1/0,s.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var Ee="Sortable"+new Date().getTime();function oi(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(j(o,"display")==="none"||o===R.ghost)){e.push({target:o,rect:ue(o)});var a=Oe({},e[e.length-1].rect);if(o.thisAnimationDuration){var i=ut(o,!0);i&&(a.top-=i.f,a.left-=i.e)}o.fromRect=a}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(ti(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var a=!1,i=0;e.forEach(function(l){var u=0,s=l.target,c=s.fromRect,p=ue(s),f=s.prevFromRect,k=s.prevToRect,_=l.rect,S=ut(s,!0);S&&(p.top-=S.f,p.left-=S.e),s.toRect=p,s.thisAnimationDuration&&Jr(f,p)&&!Jr(c,p)&&(_.top-p.top)/(_.left-p.left)===(c.top-p.top)/(c.left-p.left)&&(u=ii(_,f,k,o.options)),Jr(p,c)||(s.prevFromRect=c,s.prevToRect=p,u||(u=o.options.animation),o.animate(s,_,p,u)),u&&(a=!0,i=Math.max(i,u),clearTimeout(s.animationResetTimer),s.animationResetTimer=setTimeout(function(){s.animationTime=0,s.prevFromRect=null,s.fromRect=null,s.prevToRect=null,s.thisAnimationDuration=null},u),s.thisAnimationDuration=u)}),clearTimeout(t),a?t=setTimeout(function(){typeof n=="function"&&n()},i):typeof n=="function"&&n(),e=[]},animate:function(n,o,a,i){if(i){j(n,"transition",""),j(n,"transform","");var l=ut(this.el),u=l&&l.a,s=l&&l.d,c=(o.left-a.left)/(u||1),p=(o.top-a.top)/(s||1);n.animatingX=!!c,n.animatingY=!!p,j(n,"transform","translate3d("+c+"px,"+p+"px,0)"),this.forRepaintDummy=ai(n),j(n,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),j(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){j(n,"transition",""),j(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},i)}}}}function ai(e){return e.offsetWidth}function ii(e,t,r,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-r.top,2)+Math.pow(t.left-r.left,2))*n.animation}var mt=[],Xr={initializeByDefault:!0},zt={mount:function(t){for(var r in Xr)Xr.hasOwnProperty(r)&&!(r in t)&&(t[r]=Xr[r]);mt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),mt.push(t)},pluginEvent:function(t,r,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var a=t+"Global";mt.forEach(function(i){r[i.pluginName]&&(r[i.pluginName][a]&&r[i.pluginName][a](Oe({sortable:r},n)),r.options[i.pluginName]&&r[i.pluginName][t]&&r[i.pluginName][t](Oe({sortable:r},n)))})},initializePlugins:function(t,r,n,o){mt.forEach(function(l){var u=l.pluginName;if(!(!t.options[u]&&!l.initializeByDefault)){var s=new l(t,r,t.options);s.sortable=t,s.options=t.options,t[u]=s,je(n,s.defaults)}});for(var a in t.options)if(t.options.hasOwnProperty(a)){var i=this.modifyOption(t,a,t.options[a]);typeof i<"u"&&(t.options[a]=i)}},getEventProperties:function(t,r){var n={};return mt.forEach(function(o){typeof o.eventProperties=="function"&&je(n,o.eventProperties.call(r[o.pluginName],t))}),n},modifyOption:function(t,r,n){var o;return mt.forEach(function(a){t[a.pluginName]&&a.optionListeners&&typeof a.optionListeners[r]=="function"&&(o=a.optionListeners[r].call(t[a.pluginName],n))}),o}};function li(e){var t=e.sortable,r=e.rootEl,n=e.name,o=e.targetEl,a=e.cloneEl,i=e.toEl,l=e.fromEl,u=e.oldIndex,s=e.newIndex,c=e.oldDraggableIndex,p=e.newDraggableIndex,f=e.originalEvent,k=e.putSortable,_=e.extraEventProperties;if(t=t||r&&r[Ee],!!t){var S,m=t.options,b="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!He&&!Pt?S=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(n,!0,!0)),S.to=i||r,S.from=l||r,S.item=o||r,S.clone=a,S.oldIndex=u,S.newIndex=s,S.oldDraggableIndex=c,S.newDraggableIndex=p,S.originalEvent=f,S.pullMode=k?k.lastPutMode:void 0;var v=Oe(Oe({},_),zt.getEventProperties(n,t));for(var B in v)S[B]=v[B];r&&r.dispatchEvent(S),m[b]&&m[b].call(t,S)}}var si=["evt"],Ce=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,a=Za(n,si);zt.pluginEvent.bind(R)(t,r,Oe({dragEl:E,parentEl:le,ghostEl:H,rootEl:oe,nextEl:et,lastDownEl:sr,cloneEl:ae,cloneHidden:Ue,dragStarted:Rt,putSortable:fe,activeSortable:R.active,originalEvent:o,oldIndex:ht,oldDraggableIndex:Bt,newIndex:Le,newDraggableIndex:We,hideGhostForTarget:To,unhideGhostForTarget:Ao,cloneNowHidden:function(){Ue=!0},cloneNowShown:function(){Ue=!1},dispatchSortableEvent:function(l){ye({sortable:r,name:l,originalEvent:o})}},a))};function ye(e){li(Oe({putSortable:fe,cloneEl:ae,targetEl:E,rootEl:oe,oldIndex:ht,oldDraggableIndex:Bt,newIndex:Le,newDraggableIndex:We},e))}var E,le,H,oe,et,sr,ae,Ue,ht,Le,Bt,We,cr,fe,ft=!1,dr=!1,ur=[],tt,Ne,Vr,Kr,yo,wo,Rt,gt,jt,Ft=!1,pr=!1,mr,ve,Qr=[],Zr=!1,hr=[],fr=typeof document<"u",gr=Wr,_o=Pt||He?"cssFloat":"float",ci=fr&&!co&&!Wr&&"draggable"in document.createElement("div"),Eo=function(){if(fr){if(He)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),Co=function(t,r){var n=j(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),a=pt(t,0,r),i=pt(t,1,r),l=a&&j(a),u=i&&j(i),s=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+ue(a).width,c=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+ue(i).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&l.float&&l.float!=="none"){var p=l.float==="left"?"left":"right";return i&&(u.clear==="both"||u.clear===p)?"vertical":"horizontal"}return a&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||s>=o&&n[_o]==="none"||i&&n[_o]==="none"&&s+c>o)?"vertical":"horizontal"},di=function(t,r,n){var o=n?t.left:t.top,a=n?t.right:t.bottom,i=n?t.width:t.height,l=n?r.left:r.top,u=n?r.right:r.bottom,s=n?r.width:r.height;return o===l||a===u||o+i/2===l+s/2},ui=function(t,r){var n;return ur.some(function(o){var a=o[Ee].options.emptyInsertThreshold;if(!(!a||Yr(o))){var i=ue(o),l=t>=i.left-a&&t<=i.right+a,u=r>=i.top-a&&r<=i.bottom+a;if(l&&u)return n=o}}),n},So=function(t){function r(a,i){return function(l,u,s,c){var p=l.options.group.name&&u.options.group.name&&l.options.group.name===u.options.group.name;if(a==null&&(i||p))return!0;if(a==null||a===!1)return!1;if(i&&a==="clone")return a;if(typeof a=="function")return r(a(l,u,s,c),i)(l,u,s,c);var f=(i?l:u).options.group.name;return a===!0||typeof a=="string"&&a===f||a.join&&a.indexOf(f)>-1}}var n={},o=t.group;(!o||ir(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=r(o.pull,!0),n.checkPut=r(o.put),n.revertClone=o.revertClone,t.group=n},To=function(){!Eo&&H&&j(H,"display","none")},Ao=function(){!Eo&&H&&j(H,"display","")};fr&&!co&&document.addEventListener("click",function(e){if(dr)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),dr=!1,!1},!0);var rt=function(t){if(E){t=t.touches?t.touches[0]:t;var r=ui(t.clientX,t.clientY);if(r){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=r,n.preventDefault=void 0,n.stopPropagation=void 0,r[Ee]._onDragOver(n)}}},pi=function(t){E&&E.parentNode[Ee]._isOutsideThisEl(t.target)};function R(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=je({},t),e[Ee]=this;var r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Co(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(i,l){i.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:R.supportPointer!==!1&&"PointerEvent"in window&&(!Ot||Wr),emptyInsertThreshold:5};zt.initializePlugins(this,e,r);for(var n in r)!(n in t)&&(t[n]=r[n]);So(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:ci,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?J(e,"pointerdown",this._onTapStart):(J(e,"mousedown",this._onTapStart),J(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(J(e,"dragover",this),J(e,"dragenter",this)),ur.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),je(this,oi())}R.prototype={constructor:R,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(gt=null)},_getDirection:function(t,r){return typeof this.options.direction=="function"?this.options.direction.call(this,t,r,E):this.options.direction},_onTapStart:function(t){if(t.cancelable){var r=this,n=this.el,o=this.options,a=o.preventOnFilter,i=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,u=(l||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||u,c=o.filter;if(xi(n),!E&&!(/mousedown|pointerdown/.test(i)&&t.button!==0||o.disabled)&&!s.isContentEditable&&!(!this.nativeDraggable&&Ot&&u&&u.tagName.toUpperCase()==="SELECT")&&(u=De(u,o.draggable,n,!1),!(u&&u.animated)&&sr!==u)){if(ht=Ie(u),Bt=Ie(u,o.draggable),typeof c=="function"){if(c.call(this,t,u,this)){ye({sortable:r,rootEl:s,name:"filter",targetEl:u,toEl:n,fromEl:n}),Ce("filter",r,{evt:t}),a&&t.preventDefault();return}}else if(c&&(c=c.split(",").some(function(p){if(p=De(s,p.trim(),n,!1),p)return ye({sortable:r,rootEl:p,name:"filter",targetEl:u,fromEl:n,toEl:n}),Ce("filter",r,{evt:t}),!0}),c)){a&&t.preventDefault();return}o.handle&&!De(s,o.handle,n,!1)||this._prepareDragStart(t,l,u)}}},_prepareDragStart:function(t,r,n){var o=this,a=o.el,i=o.options,l=a.ownerDocument,u;if(n&&!E&&n.parentNode===a){var s=ue(n);if(oe=a,E=n,le=E.parentNode,et=E.nextSibling,sr=n,cr=i.group,R.dragged=E,tt={target:E,clientX:(r||t).clientX,clientY:(r||t).clientY},yo=tt.clientX-s.left,wo=tt.clientY-s.top,this._lastX=(r||t).clientX,this._lastY=(r||t).clientY,E.style["will-change"]="all",u=function(){if(Ce("delayEnded",o,{evt:t}),R.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!so&&o.nativeDraggable&&(E.draggable=!0),o._triggerDragStart(t,r),ye({sortable:o,name:"choose",originalEvent:t}),Ae(E,i.chosenClass,!0)},i.ignore.split(",").forEach(function(c){ho(E,c.trim(),en)}),J(l,"dragover",rt),J(l,"mousemove",rt),J(l,"touchmove",rt),i.supportPointer?(J(l,"pointerup",o._onDrop),!this.nativeDraggable&&J(l,"pointercancel",o._onDrop)):(J(l,"mouseup",o._onDrop),J(l,"touchend",o._onDrop),J(l,"touchcancel",o._onDrop)),so&&this.nativeDraggable&&(this.options.touchStartThreshold=4,E.draggable=!0),Ce("delayStart",this,{evt:t}),i.delay&&(!i.delayOnTouchOnly||r)&&(!this.nativeDraggable||!(Pt||He))){if(R.eventCanceled){this._onDrop();return}i.supportPointer?(J(l,"pointerup",o._disableDelayedDrag),J(l,"pointercancel",o._disableDelayedDrag)):(J(l,"mouseup",o._disableDelayedDrag),J(l,"touchend",o._disableDelayedDrag),J(l,"touchcancel",o._disableDelayedDrag)),J(l,"mousemove",o._delayedDragTouchMoveHandler),J(l,"touchmove",o._delayedDragTouchMoveHandler),i.supportPointer&&J(l,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(u,i.delay)}else u()}},_delayedDragTouchMoveHandler:function(t){var r=t.touches?t.touches[0]:t;Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){E&&en(E),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;U(t,"mouseup",this._disableDelayedDrag),U(t,"touchend",this._disableDelayedDrag),U(t,"touchcancel",this._disableDelayedDrag),U(t,"pointerup",this._disableDelayedDrag),U(t,"pointercancel",this._disableDelayedDrag),U(t,"mousemove",this._delayedDragTouchMoveHandler),U(t,"touchmove",this._delayedDragTouchMoveHandler),U(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,r){r=r||t.pointerType=="touch"&&t,!this.nativeDraggable||r?this.options.supportPointer?J(document,"pointermove",this._onTouchMove):r?J(document,"touchmove",this._onTouchMove):J(document,"mousemove",this._onTouchMove):(J(E,"dragend",this),J(oe,"dragstart",this._onDragStart));try{document.selection?vr(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,r){if(ft=!1,oe&&E){Ce("dragStarted",this,{evt:r}),this.nativeDraggable&&J(document,"dragover",pi);var n=this.options;!t&&Ae(E,n.dragClass,!1),Ae(E,n.ghostClass,!0),R.active=this,t&&this._appendGhost(),ye({sortable:this,name:"start",originalEvent:r})}else this._nulling()},_emulateDragOver:function(){if(Ne){this._lastX=Ne.clientX,this._lastY=Ne.clientY,To();for(var t=document.elementFromPoint(Ne.clientX,Ne.clientY),r=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Ne.clientX,Ne.clientY),t!==r);)r=t;if(E.parentNode[Ee]._isOutsideThisEl(t),r)do{if(r[Ee]){var n=void 0;if(n=r[Ee]._onDragOver({clientX:Ne.clientX,clientY:Ne.clientY,target:t,rootEl:r}),n&&!this.options.dragoverBubble)break}t=r}while(r=po(r));Ao()}},_onTouchMove:function(t){if(tt){var r=this.options,n=r.fallbackTolerance,o=r.fallbackOffset,a=t.touches?t.touches[0]:t,i=H&&ut(H,!0),l=H&&i&&i.a,u=H&&i&&i.d,s=gr&&ve&&go(ve),c=(a.clientX-tt.clientX+o.x)/(l||1)+(s?s[0]-Qr[0]:0)/(l||1),p=(a.clientY-tt.clientY+o.y)/(u||1)+(s?s[1]-Qr[1]:0)/(u||1);if(!R.active&&!ft){if(n&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(H){i?(i.e+=c-(Vr||0),i.f+=p-(Kr||0)):i={a:1,b:0,c:0,d:1,e:c,f:p};var f="matrix(".concat(i.a,",").concat(i.b,",").concat(i.c,",").concat(i.d,",").concat(i.e,",").concat(i.f,")");j(H,"webkitTransform",f),j(H,"mozTransform",f),j(H,"msTransform",f),j(H,"transform",f),Vr=c,Kr=p,Ne=a}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!H){var t=this.options.fallbackOnBody?document.body:oe,r=ue(E,!0,gr,!0,t),n=this.options;if(gr){for(ve=t;j(ve,"position")==="static"&&j(ve,"transform")==="none"&&ve!==document;)ve=ve.parentNode;ve!==document.body&&ve!==document.documentElement?(ve===document&&(ve=Me()),r.top+=ve.scrollTop,r.left+=ve.scrollLeft):ve=Me(),Qr=go(ve)}H=E.cloneNode(!0),Ae(H,n.ghostClass,!1),Ae(H,n.fallbackClass,!0),Ae(H,n.dragClass,!0),j(H,"transition",""),j(H,"transform",""),j(H,"box-sizing","border-box"),j(H,"margin",0),j(H,"top",r.top),j(H,"left",r.left),j(H,"width",r.width),j(H,"height",r.height),j(H,"opacity","0.8"),j(H,"position",gr?"absolute":"fixed"),j(H,"zIndex","100000"),j(H,"pointerEvents","none"),R.ghost=H,t.appendChild(H),j(H,"transform-origin",yo/parseInt(H.style.width)*100+"% "+wo/parseInt(H.style.height)*100+"%")}},_onDragStart:function(t,r){var n=this,o=t.dataTransfer,a=n.options;if(Ce("dragStart",this,{evt:t}),R.eventCanceled){this._onDrop();return}Ce("setupClone",this),R.eventCanceled||(ae=ko(E),ae.removeAttribute("id"),ae.draggable=!1,ae.style["will-change"]="",this._hideClone(),Ae(ae,this.options.chosenClass,!1),R.clone=ae),n.cloneId=vr(function(){Ce("clone",n),!R.eventCanceled&&(n.options.removeCloneOnHide||oe.insertBefore(ae,E),n._hideClone(),ye({sortable:n,name:"clone"}))}),!r&&Ae(E,a.dragClass,!0),r?(dr=!0,n._loopId=setInterval(n._emulateDragOver,50)):(U(document,"mouseup",n._onDrop),U(document,"touchend",n._onDrop),U(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",a.setData&&a.setData.call(n,o,E)),J(document,"drop",n),j(E,"transform","translateZ(0)")),ft=!0,n._dragStartId=vr(n._dragStarted.bind(n,r,t)),J(document,"selectstart",n),Rt=!0,window.getSelection().removeAllRanges(),Ot&&j(document.body,"user-select","none")},_onDragOver:function(t){var r=this.el,n=t.target,o,a,i,l=this.options,u=l.group,s=R.active,c=cr===u,p=l.sort,f=fe||s,k,_=this,S=!1;if(Zr)return;function m(z,bt){Ce(z,_,Oe({evt:t,isOwner:c,axis:k?"vertical":"horizontal",revert:i,dragRect:o,targetRect:a,canSort:p,fromSortable:f,target:n,completed:v,onMove:function(nt,ot){return br(oe,r,E,o,nt,ue(nt),t,ot)},changed:B},bt))}function b(){m("dragOverAnimationCapture"),_.captureAnimationState(),_!==f&&f.captureAnimationState()}function v(z){return m("dragOverCompleted",{insertion:z}),z&&(c?s._hideClone():s._showClone(_),_!==f&&(Ae(E,fe?fe.options.ghostClass:s.options.ghostClass,!1),Ae(E,l.ghostClass,!0)),fe!==_&&_!==R.active?fe=_:_===R.active&&fe&&(fe=null),f===_&&(_._ignoreWhileAnimating=n),_.animateAll(function(){m("dragOverAnimationComplete"),_._ignoreWhileAnimating=null}),_!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(n===E&&!E.animated||n===r&&!n.animated)&&(gt=null),!l.dragoverBubble&&!t.rootEl&&n!==document&&(E.parentNode[Ee]._isOutsideThisEl(t.target),!z&&rt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),S=!0}function B(){Le=Ie(E),We=Ie(E,l.draggable),ye({sortable:_,name:"change",toEl:r,newIndex:Le,newDraggableIndex:We,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=De(n,l.draggable,r,!0),m("dragOver"),R.eventCanceled)return S;if(E.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||_._ignoreWhileAnimating===n)return v(!1);if(dr=!1,s&&!l.disabled&&(c?p||(i=le!==oe):fe===this||(this.lastPutMode=cr.checkPull(this,s,E,t))&&u.checkPut(this,s,E,t))){if(k=this._getDirection(t,n)==="vertical",o=ue(E),m("dragOverValid"),R.eventCanceled)return S;if(i)return le=oe,b(),this._hideClone(),m("revert"),R.eventCanceled||(et?oe.insertBefore(E,et):oe.appendChild(E)),v(!0);var F=Yr(r,l.draggable);if(!F||gi(t,k,this)&&!F.animated){if(F===E)return v(!1);if(F&&r===t.target&&(n=F),n&&(a=ue(n)),br(oe,r,E,o,n,a,t,!!n)!==!1)return b(),F&&F.nextSibling?r.insertBefore(E,F.nextSibling):r.appendChild(E),le=r,B(),v(!0)}else if(F&&fi(t,k,this)){var W=pt(r,0,l,!0);if(W===E)return v(!1);if(n=W,a=ue(n),br(oe,r,E,o,n,a,t,!1)!==!1)return b(),r.insertBefore(E,W),le=r,B(),v(!0)}else if(n.parentNode===r){a=ue(n);var $=0,ee,T=E.parentNode!==r,G=!di(E.animated&&E.toRect||o,n.animated&&n.toRect||a,k),me=k?"top":"left",V=fo(n,"top","top")||fo(E,"top","top"),K=V?V.scrollTop:void 0;gt!==n&&(ee=a[me],Ft=!1,pr=!G&&l.invertSwap||T),$=bi(t,n,a,k,G?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,pr,gt===n);var ie;if($!==0){var ge=Ie(E);do ge-=$,ie=le.children[ge];while(ie&&(j(ie,"display")==="none"||ie===H))}if($===0||ie===n)return v(!1);gt=n,jt=$;var Se=n.nextElementSibling,te=!1;te=$===1;var we=br(oe,r,E,o,n,a,t,te);if(we!==!1)return(we===1||we===-1)&&(te=we===1),Zr=!0,setTimeout(hi,30),b(),te&&!Se?r.appendChild(E):n.parentNode.insertBefore(E,te?Se:n),V&&vo(V,0,K-V.scrollTop),le=E.parentNode,ee!==void 0&&!pr&&(mr=Math.abs(ee-ue(n)[me])),B(),v(!0)}if(r.contains(E))return v(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){U(document,"mousemove",this._onTouchMove),U(document,"touchmove",this._onTouchMove),U(document,"pointermove",this._onTouchMove),U(document,"dragover",rt),U(document,"mousemove",rt),U(document,"touchmove",rt)},_offUpEvents:function(){var t=this.el.ownerDocument;U(t,"mouseup",this._onDrop),U(t,"touchend",this._onDrop),U(t,"pointerup",this._onDrop),U(t,"pointercancel",this._onDrop),U(t,"touchcancel",this._onDrop),U(document,"selectstart",this)},_onDrop:function(t){var r=this.el,n=this.options;if(Le=Ie(E),We=Ie(E,n.draggable),Ce("drop",this,{evt:t}),le=E&&E.parentNode,Le=Ie(E),We=Ie(E,n.draggable),R.eventCanceled){this._nulling();return}ft=!1,pr=!1,Ft=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tn(this.cloneId),tn(this._dragStartId),this.nativeDraggable&&(U(document,"drop",this),U(r,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ot&&j(document.body,"user-select",""),j(E,"transform",""),t&&(Rt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),H&&H.parentNode&&H.parentNode.removeChild(H),(oe===le||fe&&fe.lastPutMode!=="clone")&&ae&&ae.parentNode&&ae.parentNode.removeChild(ae),E&&(this.nativeDraggable&&U(E,"dragend",this),en(E),E.style["will-change"]="",Rt&&!ft&&Ae(E,fe?fe.options.ghostClass:this.options.ghostClass,!1),Ae(E,this.options.chosenClass,!1),ye({sortable:this,name:"unchoose",toEl:le,newIndex:null,newDraggableIndex:null,originalEvent:t}),oe!==le?(Le>=0&&(ye({rootEl:le,name:"add",toEl:le,fromEl:oe,originalEvent:t}),ye({sortable:this,name:"remove",toEl:le,originalEvent:t}),ye({rootEl:le,name:"sort",toEl:le,fromEl:oe,originalEvent:t}),ye({sortable:this,name:"sort",toEl:le,originalEvent:t})),fe&&fe.save()):Le!==ht&&Le>=0&&(ye({sortable:this,name:"update",toEl:le,originalEvent:t}),ye({sortable:this,name:"sort",toEl:le,originalEvent:t})),R.active&&((Le==null||Le===-1)&&(Le=ht,We=Bt),ye({sortable:this,name:"end",toEl:le,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Ce("nulling",this),oe=E=le=H=et=ae=sr=Ue=tt=Ne=Rt=Le=We=ht=Bt=gt=jt=fe=cr=R.dragged=R.ghost=R.clone=R.active=null,hr.forEach(function(t){t.checked=!0}),hr.length=Vr=Kr=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":E&&(this._onDragOver(t),mi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],r,n=this.el.children,o=0,a=n.length,i=this.options;o<a;o++)r=n[o],De(r,i.draggable,this.el,!1)&&t.push(r.getAttribute(i.dataIdAttr)||ki(r));return t},sort:function(t,r){var n={},o=this.el;this.toArray().forEach(function(a,i){var l=o.children[i];De(l,this.options.draggable,o,!1)&&(n[a]=l)},this),r&&this.captureAnimationState(),t.forEach(function(a){n[a]&&(o.removeChild(n[a]),o.appendChild(n[a]))}),r&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,r){return De(t,r||this.options.draggable,this.el,!1)},option:function(t,r){var n=this.options;if(r===void 0)return n[t];var o=zt.modifyOption(this,t,r);typeof o<"u"?n[t]=o:n[t]=r,t==="group"&&So(n)},destroy:function(){Ce("destroy",this);var t=this.el;t[Ee]=null,U(t,"mousedown",this._onTapStart),U(t,"touchstart",this._onTapStart),U(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(U(t,"dragover",this),U(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(r){r.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ur.splice(ur.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Ue){if(Ce("hideClone",this),R.eventCanceled)return;j(ae,"display","none"),this.options.removeCloneOnHide&&ae.parentNode&&ae.parentNode.removeChild(ae),Ue=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Ue){if(Ce("showClone",this),R.eventCanceled)return;E.parentNode==oe&&!this.options.group.revertClone?oe.insertBefore(ae,E):et?oe.insertBefore(ae,et):oe.appendChild(ae),this.options.group.revertClone&&this.animate(E,ae),j(ae,"display",""),Ue=!1}}};function mi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function br(e,t,r,n,o,a,i,l){var u,s=e[Ee],c=s.options.onMove,p;return window.CustomEvent&&!He&&!Pt?u=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent("move",!0,!0)),u.to=t,u.from=e,u.dragged=r,u.draggedRect=n,u.related=o||t,u.relatedRect=a||ue(t),u.willInsertAfter=l,u.originalEvent=i,e.dispatchEvent(u),c&&(p=c.call(s,u,i)),p}function en(e){e.draggable=!1}function hi(){Zr=!1}function fi(e,t,r){var n=ue(pt(r.el,0,r.options,!0)),o=xo(r.el,r.options,H),a=10;return t?e.clientX<o.left-a||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-a||e.clientY<n.bottom&&e.clientX<n.left}function gi(e,t,r){var n=ue(Yr(r.el,r.options.draggable)),o=xo(r.el,r.options,H),a=10;return t?e.clientX>o.right+a||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+a||e.clientX>n.right&&e.clientY>n.top}function bi(e,t,r,n,o,a,i,l){var u=n?e.clientY:e.clientX,s=n?r.height:r.width,c=n?r.top:r.left,p=n?r.bottom:r.right,f=!1;if(!i){if(l&&mr<s*o){if(!Ft&&(jt===1?u>c+s*a/2:u<p-s*a/2)&&(Ft=!0),Ft)f=!0;else if(jt===1?u<c+mr:u>p-mr)return-jt}else if(u>c+s*(1-o)/2&&u<p-s*(1-o)/2)return vi(t)}return f=f||i,f&&(u<c+s*a/2||u>p-s*a/2)?u>c+s/2?1:-1:0}function vi(e){return Ie(E)<Ie(e)?1:-1}function ki(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,r=t.length,n=0;r--;)n+=t.charCodeAt(r);return n.toString(36)}function xi(e){hr.length=0;for(var t=e.getElementsByTagName("input"),r=t.length;r--;){var n=t[r];n.checked&&hr.push(n)}}function vr(e){return setTimeout(e,0)}function tn(e){return clearTimeout(e)}fr&&J(document,"touchmove",function(e){(R.active||ft)&&e.cancelable&&e.preventDefault()}),R.utils={on:J,off:U,css:j,find:ho,is:function(t,r){return!!De(t,r,t,!1)},extend:ri,throttle:bo,closest:De,toggleClass:Ae,clone:ko,index:Ie,nextTick:vr,cancelNextTick:tn,detectDirection:Co,getChild:pt,expando:Ee},R.get=function(e){return e[Ee]},R.mount=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(R.utils=Oe(Oe({},R.utils),n.utils)),zt.mount(n)})},R.create=function(e,t){return new R(e,t)},R.version=ei;var pe=[],Ht,rn,nn=!1,on,an,kr,Gt;function yi(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(r){var n=r.originalEvent;this.sortable.nativeDraggable?J(document,"dragover",this._handleAutoScroll):this.options.supportPointer?J(document,"pointermove",this._handleFallbackAutoScroll):n.touches?J(document,"touchmove",this._handleFallbackAutoScroll):J(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(r){var n=r.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?U(document,"dragover",this._handleAutoScroll):(U(document,"pointermove",this._handleFallbackAutoScroll),U(document,"touchmove",this._handleFallbackAutoScroll),U(document,"mousemove",this._handleFallbackAutoScroll)),Lo(),xr(),ni()},nulling:function(){kr=rn=Ht=nn=Gt=on=an=null,pe.length=0},_handleFallbackAutoScroll:function(r){this._handleAutoScroll(r,!0)},_handleAutoScroll:function(r,n){var o=this,a=(r.touches?r.touches[0]:r).clientX,i=(r.touches?r.touches[0]:r).clientY,l=document.elementFromPoint(a,i);if(kr=r,n||this.options.forceAutoScrollFallback||Pt||He||Ot){ln(r,this.options,l,n);var u=$e(l,!0);nn&&(!Gt||a!==on||i!==an)&&(Gt&&Lo(),Gt=setInterval(function(){var s=$e(document.elementFromPoint(a,i),!0);s!==u&&(u=s,xr()),ln(r,o.options,s,n)},10),on=a,an=i)}else{if(!this.options.bubbleScroll||$e(l,!0)===Me()){xr();return}ln(r,this.options,$e(l,!1),!1)}}},je(e,{pluginName:"scroll",initializeByDefault:!0})}function xr(){pe.forEach(function(e){clearInterval(e.pid)}),pe=[]}function Lo(){clearInterval(Gt)}var ln=bo(function(e,t,r,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,i=t.scrollSensitivity,l=t.scrollSpeed,u=Me(),s=!1,c;rn!==r&&(rn=r,xr(),Ht=t.scroll,c=t.scrollFn,Ht===!0&&(Ht=$e(r,!0)));var p=0,f=Ht;do{var k=f,_=ue(k),S=_.top,m=_.bottom,b=_.left,v=_.right,B=_.width,F=_.height,W=void 0,$=void 0,ee=k.scrollWidth,T=k.scrollHeight,G=j(k),me=k.scrollLeft,V=k.scrollTop;k===u?(W=B<ee&&(G.overflowX==="auto"||G.overflowX==="scroll"||G.overflowX==="visible"),$=F<T&&(G.overflowY==="auto"||G.overflowY==="scroll"||G.overflowY==="visible")):(W=B<ee&&(G.overflowX==="auto"||G.overflowX==="scroll"),$=F<T&&(G.overflowY==="auto"||G.overflowY==="scroll"));var K=W&&(Math.abs(v-o)<=i&&me+B<ee)-(Math.abs(b-o)<=i&&!!me),ie=$&&(Math.abs(m-a)<=i&&V+F<T)-(Math.abs(S-a)<=i&&!!V);if(!pe[p])for(var ge=0;ge<=p;ge++)pe[ge]||(pe[ge]={});(pe[p].vx!=K||pe[p].vy!=ie||pe[p].el!==k)&&(pe[p].el=k,pe[p].vx=K,pe[p].vy=ie,clearInterval(pe[p].pid),(K!=0||ie!=0)&&(s=!0,pe[p].pid=setInterval((function(){n&&this.layer===0&&R.active._onTouchMove(kr);var Se=pe[this.layer].vy?pe[this.layer].vy*l:0,te=pe[this.layer].vx?pe[this.layer].vx*l:0;typeof c=="function"&&c.call(R.dragged.parentNode[Ee],te,Se,e,kr,pe[this.layer].el)!=="continue"||vo(pe[this.layer].el,te,Se)}).bind({layer:p}),24))),p++}while(t.bubbleScroll&&f!==u&&(f=$e(f,!1)));nn=s}},30),Io=function(t){var r=t.originalEvent,n=t.putSortable,o=t.dragEl,a=t.activeSortable,i=t.dispatchSortableEvent,l=t.hideGhostForTarget,u=t.unhideGhostForTarget;if(r){var s=n||a;l();var c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r,p=document.elementFromPoint(c.clientX,c.clientY);u(),s&&!s.el.contains(p)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function sn(){}sn.prototype={startIndex:null,dragStart:function(t){var r=t.oldDraggableIndex;this.startIndex=r},onSpill:function(t){var r=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=pt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(r,o):this.sortable.el.appendChild(r),this.sortable.animateAll(),n&&n.animateAll()},drop:Io},je(sn,{pluginName:"revertOnSpill"});function cn(){}cn.prototype={onSpill:function(t){var r=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),r.parentNode&&r.parentNode.removeChild(r),o.animateAll()},drop:Io},je(cn,{pluginName:"removeOnSpill"}),R.mount(new yi),R.mount(cn,sn);function wi({departments:e,onChange:t}){const[r,n]=xe([]),[o,a]=xe(e),i=Ct(null);Et(()=>{a(e)},[e]);const l=m=>{a(m),t(m)},u=m=>{n(b=>b.includes(m)?b.filter(v=>v!==m):[...b,m])},s=(m,b)=>{const v=[...o];v[m]=b,l(v)},c=()=>{const m={identifier:"",color:"#000000",sort:0,labels:[]};l([...o,m]),n(b=>[...b,o.length])},p=m=>{const b=[...o];b.splice(m,1),l(b),n(v=>v.filter(B=>B!==m))},f=(m,b,v)=>{const B=[...o];B[m].labels[b]=v,l(B)},k=m=>{const b=[...o];b[m].labels.push(""),l(b)},_=(m,b)=>{const v=[...o];v[m].labels.splice(b,1),l(v)},S=(m,b)=>{const v=[...o];v[m][b]===!0?delete v[m][b]:v[m][b]=!0,l(v)};return Et(()=>{if(!i.current)return;const m=R.create(i.current,{animation:150,handle:".drag-handle",onEnd:b=>{const v=b.oldIndex,B=b.newIndex;if(v===B||v==null||B==null)return;const F=[...o],[W]=F.splice(v,1);F.splice(B,0,W),F.forEach(($,ee)=>{$.sort=ee}),l(F)}});return()=>{m.destroy()}},[o]),d("div",{class:"flex flex-col gap-4 mt-4",children:[d("div",{class:"flex justify-between items-center",children:[d("h3",{class:"text-md",children:"Departments"}),d(Y,{onClick:c,children:"Add Department +"})]}),d("div",{ref:i,class:"flex flex-col gap-4",children:o.sort((m,b)=>m.sort-b.sort).map((m,b)=>d(_i,{dept:m,index:b,isOpen:r.includes(b),toggleOpen:()=>u(b),onChange:v=>s(b,v),onDelete:()=>p(b),onLabelChange:(v,B)=>f(b,v,B),onAddLabel:()=>k(b),onDeleteLabel:v=>_(b,v),toggleFlag:v=>S(b,v)},m.identifier+b))})]})}function _i({dept:e,isOpen:t,toggleOpen:r,onChange:n,onDelete:o,onLabelChange:a,onAddLabel:i,onDeleteLabel:l,toggleFlag:u}){return d("div",{class:"bg-gray-700/30 rounded-lg p-4 shadow-xl flex flex-col gap-3",children:[d("div",{class:"flex items-center justify-between select-none",children:[d("div",{class:"flex items-center gap-4 flex-grow cursor-pointer",onClick:r,children:[d(Te,{placeholder:"Identifier",value:e.identifier,onChange:s=>n({...e,identifier:s})}),d(Te,{type:"color",value:e.color,onChange:s=>n({...e,color:s}),isColorInput:!0})]}),d("div",{class:"flex items-center gap-2",children:[d(Y,{onClick:s=>{s.stopPropagation()},className:"drag-handle",children:d(io,{})}),d(Y,{variant:"red",onClick:s=>{s.stopPropagation(),o()},children:d(Re,{})})]})]}),t&&d(Ve,{children:[d("div",{class:"flex gap-4 items-center",children:[d(Ze,{enabled:!!e.useless,onClick:()=>u("useless"),children:"Mark as useless"}),d(Ze,{enabled:!!e.noFilterButton,onClick:()=>u("noFilterButton"),children:"Remove Filter Button"})]}),d("div",{class:"flex flex-col gap-2",children:[d("div",{class:"flex justify-between items-center",children:[d("span",{class:"font-semibold",children:"Labels"}),d(Y,{onClick:i,children:"Add Label +"})]}),e.labels.map((s,c)=>d("div",{class:"flex gap-2 items-center",children:[d(Te,{placeholder:"Label",value:s,onChange:p=>a(c,p)}),d(Y,{variant:"red",onClick:()=>l(c),children:d(Re,{})})]},c))]})]})]})}const Ei=["issue_assigned_to_id","issue_status_id"],Ci={issue_assigned_to_id:"Assignees",issue_status_id:"Status"};function Si(){const e={};return Ei.forEach(t=>{const r=document.getElementById(t);if(!(r instanceof HTMLSelectElement))return;const n=Array.from(r.options).filter(o=>o.value).map(o=>o.innerHTML.trim()).filter(Boolean);n.length&&(e[t]=n)}),e}function Ti({existing:e,onAdd:t}){const r=Pe(Si,[]),n=Pe(()=>{const o=new Set(e.map(a=>a.trim()));return Object.entries(r).map(([a,i])=>({title:Ci[a]||a,labels:i.filter(l=>!o.has(l))})).filter(a=>a.labels.length>0)},[r,e]);return Object.keys(r).length===0?d("p",{class:"text-xs text-gray-400",children:"No suggestions available — open this config on a ticket form page to see the assignee / status options here."}):d("div",{class:"flex flex-col gap-2",children:[d("span",{class:"text-xs text-gray-400",children:"Suggestions (click to add)"}),n.length===0?d("p",{class:"text-xs text-gray-500",children:"All suggestions are already in the whitelist."}):n.map(o=>d("div",{class:"flex flex-col gap-1",children:[d("span",{class:"text-xs text-gray-500",children:o.title}),d("div",{class:"flex flex-wrap gap-1.5",children:o.labels.map(a=>d("button",{type:"button",class:"text-xs! rounded-full! bg-gray-700! hover:bg-green-800! text-white! px-2.5! py-1! cursor-pointer! border-none! shadow-none!",onClick:()=>t(a),children:[a," +"]},a))})]},o.title))]})}const Ai=[{value:"classic",label:"Classic"},{value:"clean-light",label:"Clean light"},{value:"clean-dark",label:"Clean dark"},{value:"clean-auto",label:"Clean auto"}];function Li({profiles:e,setConfig:t}){const[r,n]=xe(0),o=s=>{n(c=>c===s?null:s)},a=()=>{const s={name:"New Profile",addBadgeHighlight:!1,addBgHighlight:!1,addBorderHighlight:!1,departments:[],addPriorityBadge:!1,useTagCloudWhitelist:!1,tagCloudWhitelist:[]};t(c=>({...c,profiles:[...c.profiles,s]})),n(e.length)},i=s=>{t(c=>{const p=[...c.profiles];return p.splice(s,1),{...c,profiles:p}}),r===s&&n(null)},l=Nr((s,c)=>{t(p=>{const f=[...p.profiles];return f[s]={...f[s],name:c},{...p,profiles:f}})},[t]),u=(s,c)=>{t(p=>{const f=[...p.profiles];return f[s]={...f[s],...c},{...p,profiles:f}})};return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex gap-4 justify-between items-center",children:[d("h2",{class:"text-2xl",children:"Edit Profiles"}),d(Y,{onClick:a,children:"Add Profile +"})]}),d("div",{class:"space-y-3",children:e.map((s,c)=>d("div",{class:"bg-gray-800 rounded-xl p-4 shadow-md select-none",children:[d("div",{class:"flex justify-between items-center cursor-pointer",onClick:()=>o(c),children:[d(Te,{placeholder:"Profile Name",value:s.name,onChange:p=>l(c,p)}),d("div",{class:"flex gap-2 items-center",children:[oo(s)&&d("span",{class:"text-xs text-yellow-400 border border-yellow-700 rounded px-2 py-0.5 whitespace-nowrap",title:"Differs from the team config. Share it via the wiki, or make it LOCAL to keep it for yourself.",children:oo(s)==="new"?"not in team config":"edited"}),d(Y,{variant:s.local===!0?"green":"gray",title:"Kept out of the shared config, survives updates",onClick:p=>{p.stopPropagation(),!(s.local===!0&&!confirm(`Make "${s.name}" part of the shared config again?

It will no longer be protected from config updates and will be included when you share the config. Requires Save & Reload.`))&&u(c,{local:!s.local})},children:"LOCAL"}),d(Y,{onClick:p=>{p.stopPropagation(),i(c)},variant:"red",children:d(Re,{})})]})]}),r===c&&d(Ve,{children:[d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-2 pt-2",children:[d("span",{className:"text-md",children:"Card Style"}),d("div",{class:"flex flex-wrap gap-2",children:Ai.map(({value:p,label:f})=>d(Y,{variant:(s.cardStyle||"classic")===p?"green":"gray",title:p==="clean-auto"?"Follows the light/dark mode of your system":void 0,onClick:()=>u(c,{cardStyle:p}),children:f},p))})]}),d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-3",children:[d("span",{className:"text-md",children:"Tickets Highlighting"}),d(Xa,{profile:s,onChange:p=>u(c,p)})]}),d(wi,{departments:s.departments||[],onChange:p=>u(c,{departments:p})}),d("div",{class:"mt-3 border-t border-gray-700 flex flex-col gap-2",children:[d("div",{className:"w-fit py-2",children:d(Ze,{enabled:s.useTagCloudWhitelist===!0,onClick:()=>u(c,{useTagCloudWhitelist:!s.useTagCloudWhitelist}),children:"Use Tag Cloud Whitelist"})}),s.useTagCloudWhitelist===!0&&d("div",{class:"grid grid-cols-3 gap-2",children:[(s.tagCloudWhitelist||[]).map((p,f)=>d("div",{class:"flex gap-2 items-center",children:[d(Te,{fullWidth:!0,placeholder:"Option label",value:p,onChange:k=>{const _=[...s.tagCloudWhitelist||[]];_[f]=k,u(c,{tagCloudWhitelist:_})}}),d(Y,{variant:"red",onClick:()=>{const k=[...s.tagCloudWhitelist||[]];k.splice(f,1),u(c,{tagCloudWhitelist:k})},children:d(Re,{})})]},f)),d(Y,{onClick:()=>{const p=[...s.tagCloudWhitelist||[],""];u(c,{tagCloudWhitelist:p})},children:"Add Option +"})]}),s.useTagCloudWhitelist===!0&&d(Ti,{existing:s.tagCloudWhitelist||[],onAdd:p=>{const f=[...s.tagCloudWhitelist||[],p];u(c,{tagCloudWhitelist:f})}})]})]})]},c))})]})}const Do="dynamic-kanban-config";function No(){const t=new URLSearchParams(window.location.search).get("query_id");return t||(document.querySelector("tr.group.swimlane")?"default-board":null)}function Ii(){return document.querySelector("h2")?.textContent?.trim()||""}function Di(){const e=No();if(!e)return;let t;try{const i=localStorage.getItem(Do);t=i?JSON.parse(i):structuredClone(Tt)}catch{return}if(!t||typeof t!="object")return;const r=Array.isArray(t.swimlanes)?t.swimlanes:[],n=r.filter(i=>i.boardId===e).sort((i,l)=>i.sort-l.sort),o=Ii();let a=!1;Array.from(document.querySelectorAll("tr.group.swimlane")).forEach((i,l)=>{const u=i.getAttribute("data-id")||`swimlane-${l}`;if(n.find(c=>c.identifier===u))return;const s=i.querySelector('a[href^="/projects/"]')?.textContent?.trim()||u;n.push({identifier:u,name:s,sort:n.length,boardId:e,boardName:o}),a=!0}),o&&n.forEach(i=>{i.boardName!==o&&(i.boardName=o,a=!0)}),a&&(t.swimlanes=[...r.filter(i=>i.boardId!==e),...n],localStorage.setItem(Do,JSON.stringify(t)))}function Ni({swimlanes:e,swimlaneGroups:t,setConfig:r}){const n=Pe(No,[]),[o,a]=xe(n),i=Ct(null),l=Pe(()=>{const m=new Map;return(e||[]).forEach(b=>{m.has(b.boardId)||m.set(b.boardId,b.boardName||"")}),Array.from(m.entries()).map(([b,v])=>({id:b,name:v}))},[e]);Et(()=>{(o===null||!l.find(m=>m.id===o))&&l.length>0&&a(l.find(m=>m.id===n)?.id||l[0].id)},[l,o,n]);const u=Pe(()=>(e||[]).filter(m=>m.boardId===o).sort((m,b)=>m.sort-b.sort),[e,o]),s=Pe(()=>(t||[]).filter(m=>m.boardId===o),[t,o]),c=Pe(()=>{const m=[];s.forEach(v=>{const B=u.filter(W=>(v.laneIdentifiers||[]).includes(W.identifier)),F=B.length?Math.min(...B.map(W=>W.sort)):v.sort??Number.MAX_SAFE_INTEGER;m.push({anchor:F,item:{type:"group",key:`group-${v.id}`,group:v,lanes:B}})});const b=new Set(s.flatMap(v=>v.laneIdentifiers||[]));return u.forEach(v=>{b.has(v.identifier)||m.push({anchor:v.sort,item:{type:"lane",key:`lane-${v.identifier}`,lane:v}})}),m.sort((v,B)=>v.anchor-B.anchor),m.map(v=>v.item)},[u,s]),p=m=>{r(b=>({...b,swimlanes:(b.swimlanes||[]).filter(v=>v.boardId!==m),swimlaneGroups:(b.swimlaneGroups||[]).filter(v=>v.boardId!==m)})),o===m&&a(null)},f=()=>{o&&r(m=>({...m,swimlaneGroups:[...m.swimlaneGroups||[],{id:`group-${Date.now()}`,name:"Neue Gruppe",boardId:o,laneIdentifiers:[],sort:u.length}]}))},k=(m,b)=>{r(v=>({...v,swimlaneGroups:(v.swimlaneGroups||[]).map(B=>B.id===m?{...B,name:b}:B)}))},_=m=>{r(b=>({...b,swimlaneGroups:(b.swimlaneGroups||[]).filter(v=>v.id!==m)}))};Et(()=>{const m=i.current;if(!m||!o)return;const b=()=>{const F=new Map(u.map(T=>[T.identifier,T])),W=[],$=new Map,ee=new Map;return Array.from(m.children).forEach(T=>{const G=T.getAttribute("data-lane-id");if(G){const ie=F.get(G);ie&&W.push(ie);return}const me=T.getAttribute("data-group-id");if(!me)return;ee.set(me,W.length);const V=T.querySelector("[data-group-body]"),K=Array.from(V?.children||[]).map(ie=>ie.getAttribute("data-lane-id")).filter(ie=>!!ie);$.set(me,K),K.forEach(ie=>{const ge=F.get(ie);ge&&W.push(ge)})}),{lanes:W.map((T,G)=>({...T,sort:G})),groupMembers:$,groupSorts:ee}},v=F=>{const{lanes:W,groupMembers:$,groupSorts:ee}=b(),{item:T,from:G,oldIndex:me}=F;T&&G&&(T.remove(),G.insertBefore(T,G.children[me]??null)),r(V=>({...V,swimlanes:[...(V.swimlanes||[]).filter(K=>K.boardId!==o),...W],swimlaneGroups:(V.swimlaneGroups||[]).map(K=>$.has(K.id)?{...K,laneIdentifiers:$.get(K.id),sort:ee.get(K.id)}:K)}))},B=[];return B.push(R.create(m,{animation:150,handle:".drag-handle",filter:"input, button",preventOnFilter:!1,fallbackOnBody:!0,swapThreshold:.65,group:{name:"swimlanes",put:(F,W,$)=>$.hasAttribute("data-lane-id")},onEnd:v})),m.querySelectorAll("[data-group-body]").forEach(F=>{B.push(R.create(F,{animation:150,handle:".drag-handle",filter:"input, button",preventOnFilter:!1,fallbackOnBody:!0,swapThreshold:.65,group:{name:"swimlanes",put:(W,$,ee)=>ee.hasAttribute("data-lane-id")},onEnd:v}))}),()=>B.forEach(F=>F.destroy())},[c,o,u]);const S=m=>d("div",{"data-lane-id":m.identifier,class:"bg-gray-800 rounded-xl p-4 flex justify-between items-center drag-handle cursor-pointer",children:[d("span",{class:"font-semibold",children:m.name}),d("span",{class:"text-sm text-gray-400",children:m.identifier})]},`lane-${m.identifier}`);return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex justify-between items-center gap-4",children:[d("span",{class:"text-2xl",children:"Sort Swimlanes"}),d(Y,{onClick:f,children:"Add Group +"})]}),l.length>0&&d("div",{class:"flex flex-wrap items-center gap-2 border-b border-gray-700 pb-3",children:l.map(m=>d("div",{class:"flex items-center gap-1",children:[d(Y,{variant:m.id===o?"green":"gray",onClick:()=>a(m.id),children:d("span",{class:"flex items-center gap-2",children:[m.name||`Board ${m.id}`,m.id===n&&d("span",{class:"w-2 h-2 rounded-full bg-blue-400",title:"You are on this board"})]})}),d(Y,{variant:"red",onClick:()=>p(m.id),children:d(Re,{})})]},m.id))}),l.length===0?d("p",{class:"text-xs text-gray-400",children:"No boards collected yet — boards are registered automatically as soon as you visit them."}):d("div",{ref:i,class:"flex flex-col gap-3",children:c.map(m=>m.type==="lane"?S(m.lane):d("div",{"data-group-id":m.group.id,class:"bg-gray-800/50 rounded-xl p-3 flex flex-col gap-2",children:[d("div",{class:"flex justify-between items-center gap-2",children:[d("div",{class:"relative flex-1 min-w-0",children:[d("input",{class:"peer w-full bg-transparent rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:bg-gray-800",value:m.group.name,onInput:b=>k(m.group.id,b.currentTarget.value)}),d("span",{class:"absolute inset-y-0 left-2 max-w-full overflow-hidden flex items-center gap-1.5 pointer-events-none peer-focus:hidden",children:[d("span",{class:"invisible text-sm font-semibold whitespace-pre",children:m.group.name}),d("span",{class:"text-gray-500 shrink-0",children:d(Wa,{})})]})]}),d("span",{class:"drag-handle cursor-grab text-gray-400 hover:text-white p-1",children:d(io,{})}),d(Y,{variant:"red",onClick:()=>_(m.group.id),children:d(Re,{})})]}),d("div",{"data-group-body":!0,class:"flex flex-col gap-2 rounded-lg p-1",style:"min-height: 3rem;",children:[m.lanes.map(b=>S(b)),m.lanes.length===0&&d("p",{class:"text-xs text-gray-500 text-center pointer-events-none py-2",children:"Drag swimlanes here"})]})]},m.key))})]})}const Po="dynamic-kanban-env";function Pi(){try{const e=localStorage.getItem(Po),t=e?JSON.parse(e):{};return Object.entries(t).map(([r,n])=>({key:r,value:String(n)}))}catch{return[]}}function Oi(e){const t={};e.forEach(({key:r,value:n})=>{r.trim()&&(t[r.trim()]=n)}),localStorage.setItem(Po,JSON.stringify(t))}function Mi(){const[e,t]=xe(Pi),r=i=>{t(i),Oi(i)},n=(i,l,u)=>{r(e.map((s,c)=>c===i?{...s,[l]:u}:s))},o=()=>{r([...e,{key:"",value:""}])},a=i=>{r(e.filter((l,u)=>u!==i))};return d("div",{class:"flex flex-col gap-4",children:[d("div",{class:"flex justify-between items-center gap-4",children:[d("span",{class:"text-2xl",children:"Env Variables"}),d(Y,{onClick:o,children:"Add Variable +"})]}),d("p",{class:"text-xs text-gray-400",children:["Env variables are stored locally and are ",d("b",{children:"not"})," part of the shared config. Use"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:"{{KEY}}"})," ","anywhere in the config (e.g."," ",d("code",{class:"bg-gray-800 px-1 rounded",children:'"labels": ["{{ME_NAME}}"]'}),") — it is replaced with your local value when the board loads. Changes take effect after a reload."]}),d("div",{class:"flex flex-col gap-2",children:[e.map((i,l)=>d("div",{class:"flex items-center gap-2",children:[d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm font-mono w-48 outline-none",placeholder:"KEY",value:i.key,onInput:u=>n(l,"key",u.currentTarget.value)}),d("span",{class:"text-gray-500",children:"="}),d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex-1 outline-none",placeholder:"Value",value:i.value,onInput:u=>n(l,"value",u.currentTarget.value)}),d(Y,{variant:"red",onClick:()=>a(l),children:d(Re,{})})]},l)),e.length===0&&d("p",{class:"text-xs text-gray-500",children:["No variables yet — e.g. add"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:"ME_NAME"})," ","with your own name."]})]})]})}const Oo={none:{dot:"bg-gray-500",text:"No team config set"},synced:{dot:"bg-green-500",text:"In sync with team config"},edited:{dot:"bg-yellow-500",text:"Your config differs from the team config"},updates:{dot:"bg-yellow-500",text:"Team config has updates, but you have own changes"}};function zi(){const[e,t]=xe(At),[r,n]=xe(At),[o,a]=xe(""),[i,l]=xe(!1),[u,s]=xe(Zn),c=e.trim(),p=Ma(),f=r?Ga():"none",k=async()=>{if(c){l(!0),a("");try{await ro(c,!0),Qn(c),location.reload()}catch(m){a(m.message),l(!1)}}},_=()=>{confirm("Discard your changes and use the team config?")&&(Ha(),location.reload())};return d("div",{class:"flex flex-col gap-4",children:[d("span",{class:"text-2xl",children:"Team Config"}),d("div",{class:"flex items-center gap-2",children:[d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm flex-1 min-w-0 outline-none focus:bg-gray-700",placeholder:"https://…/Kanban-Config.txt",value:e,onInput:m=>t(m.currentTarget.value),onKeyDown:m=>m.key==="Enter"&&k()}),d(Y,{variant:"green",disabled:i||!c,onClick:k,children:i?"Loading…":"Load"}),r&&d(Y,{variant:"red",onClick:()=>{Qn(""),t(""),n(""),s(""),a("")},children:"Remove"})]}),d("input",{class:"bg-gray-800 rounded-lg px-3 py-1.5 text-sm outline-none focus:bg-gray-700",placeholder:qr(c)?`Edit link: ${qr(c)}`:"Edit link (optional) — where the config is changed, shown in Raw Edit",value:u,onInput:m=>{const b=m.currentTarget.value;s(b),za(b.trim())}}),d("div",{class:"flex items-center gap-2 text-xs",children:[d("span",{class:`size-2 rounded-full ${o?"bg-red-500":Oo[f].dot}`}),o?d("span",{class:"text-red-400",children:["Could not load: ",o]}):d("span",{class:"text-gray-400",children:[Oo[f].text,r&&p&&` · last synced ${p.toLocaleString("de-DE",{dateStyle:"short",timeStyle:"short"})}`]}),!o&&(f==="edited"||f==="updates")&&d(Y,{className:"ml-auto",onClick:_,children:f==="updates"?"Discard mine & update":"Reset to team config"})]}),d("details",{class:"mt-2 bg-gray-800/50 rounded-lg px-4 py-3 text-xs text-gray-300",open:!r,children:[d("summary",{class:"cursor-pointer text-sm text-white select-none",children:"How it works"}),d("ol",{class:"list-decimal pl-4 mt-3 flex flex-col gap-2",children:[d("li",{children:["Put the config JSON where the board can read it: a"," ",d("b",{children:"Redmine wiki page"})," (use the link with"," ",d("code",{class:"bg-gray-800 px-1 rounded",children:".txt"})," at the end), a"," ",d("b",{children:"GitHub Gist"})," or a ",d("b",{children:"GitHub file"}),' (the "Raw" link, without the commit hash).']}),d("li",{children:["Paste the link above and click ",d("b",{children:"Load"}),"."]}),d("li",{children:["The config refreshes on every page load. Your own changes are kept and marked yellow — ",d("b",{children:"Reset to team config"})," discards them."]}),d("li",{children:["To share your changes: ",d("b",{children:"Save & Reload"})," → ",d("b",{children:"Raw Edit"})," →"," ",d("b",{children:"Copy"})," → paste it at the edit link."]}),d("li",{children:["Personal settings go in ",d("b",{children:"Env"})," and ",d("b",{children:"LOCAL"})," profiles — the team config never overwrites them."]})]})]})]})}function Bi({config:e,setConfig:t,currentEditorTab:r}){return d("div",{class:"h-full overflow-y-auto flex flex-col gap-5 custom-slider",children:[r=="profiles"&&d(Li,{profiles:e.profiles,setConfig:t}),r=="tags"&&d(Ja,{tags:e.tags,setConfig:t}),r=="dynamicTags"&&d(Ya,{dynamicTags:e.dynamicTags,setConfig:t}),r=="swimlanes"&&d(Ni,{swimlanes:e.swimlanes,swimlaneGroups:e.swimlaneGroups,setConfig:t}),r=="env"&&d(Mi,{}),r=="team"&&d(zi,{})]})}function Ri({rawText:e,handleRawChange:t,config:r}){const n=Ba(),o=Ct(null),a=()=>{navigator.clipboard.writeText(e)},i=async()=>{const l=await navigator.clipboard.readText();if(o.current){o.current.value=l;const u=new Event("input",{bubbles:!0,cancelable:!0});o.current.dispatchEvent(u)}};return d("div",{class:"flex flex-col gap-2 w-full h-full",children:[no(r)&&d("div",{class:"flex items-center gap-2 text-xs text-yellow-400 border border-yellow-700 rounded px-3 py-2",children:[d("span",{class:"size-2 rounded-full bg-yellow-500 shrink-0"}),d("span",{children:["Differs from the team config. To share it: Save, Copy and paste it into the"," ",n?d("a",{href:n,target:"_blank",class:"!text-yellow-300 underline",children:"team config"}):"team config","."]})]}),d("div",{class:"relative w-full flex-1 min-h-0",children:[d("div",{class:"absolute top-2 right-2 flex gap-2 z-10",children:[d(Y,{onClick:a,children:"Copy"}),d(Y,{onClick:i,children:"Paste"})]}),d("textarea",{id:"config",ref:o,class:"!w-full !h-full !resize-none !max-h-full !text-md !p-2 !border-2 !text-white !rounded !bg-gray-900 !border-gray-700 !border-dashed focus:!outline-none focus:!border-gray-500",rows:20,value:e,onInput:t})]})]})}function ji(){const[e,t,r,n,o]=Ua(),[a,i]=xe(!1),[l,u]=xe(JSON.stringify(Nt(e),null,4)),[s,c]=xe("profiles"),p=k=>{const _=k.currentTarget.value;u(_);try{const S=JSON.parse(_);t(Ur(S))}catch{console.warn("Invalid JSON.")}},f=()=>{a||u(JSON.stringify(Nt(e),null,4)),i(!a)};return d(Oa,{children:[d("div",{class:"flex flex-col gap-2 mb-4",children:[d("div",{class:"flex flex-wrap gap-2 items-center",children:[d(Y,{variant:s==="profiles"?"green":"gray",onClick:()=>c("profiles"),children:"Profiles"}),d(Y,{variant:s==="tags"?"green":"gray",onClick:()=>c("tags"),children:"Tags"}),d(Y,{variant:s==="dynamicTags"?"green":"gray",onClick:()=>c("dynamicTags"),children:"Dynamic Tags"}),d(Y,{variant:s==="swimlanes"?"green":"gray",onClick:()=>c("swimlanes"),children:"Swimlanes"}),d(Y,{variant:s==="env"?"green":"gray",onClick:()=>c("env"),children:"Env"}),d(Y,{variant:s==="team"?"green":"gray",onClick:()=>c("team"),children:d("span",{class:"flex items-center gap-1.5",children:["Team Config",no(e)&&d("span",{class:"size-2 rounded-full bg-yellow-500",title:"Differs from the team config"})]})}),d("span",{class:"ml-auto text-sm px-3 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700 select-none whitespace-nowrap",children:["v","5.11.1"]})]}),d("div",{class:"flex gap-2",children:[d(Y,{onClick:n,variant:"red",children:"Reset"}),d(Y,{onClick:f,children:a?"Done":"Raw Edit"}),d(Y,{disabled:!o,onClick:r,variant:o?"green":"gray",children:"Save & Reload"})]})]}),a?d(Ri,{rawText:l,handleRawChange:p,config:e}):d(Bi,{config:e,setConfig:t,currentEditorTab:s})]})}function Fi(){window.__KANBAN_DEFAULT_CONFIG__=Tt,Di(),qa();let e=document.getElementById("app");e||(e=document.createElement("div"),e.id="app",document.body.appendChild(e)),Wo(d(ji,{}),e)}function Hi(){const e="kanban_active_filters",t="dynamic-kanban-config",r="dynamic-kanban-env",n="dynamic-kanban-local-profiles",o=window.__KANBAN_DEFAULT_CONFIG__,a=localStorage.getItem(t);function i(){try{return JSON.parse(localStorage.getItem(r))||{}}catch{return{}}}function l(h){const g=i();return h.replace(/\{\{\s*([\w.-]+)\s*\}\}/g,(x,w)=>w in g?String(g[w]).replace(/\\/g,"\\\\").replace(/"/g,'\\"'):x)}function u(){try{const h=localStorage.getItem(n),g=h?JSON.parse(l(h)):[];return Array.isArray(g)?g:[]}catch{return[]}}let s;try{const h=a||JSON.stringify(o);if(s=JSON.parse(l(h)),typeof s!="object"||s===null)throw new Error("Parsed config is not an object")}catch(h){console.warn("Invalid config in localStorage, falling back to defaultConfig:",h),s=o}u().forEach(h=>{s.profiles=s.profiles||[];const g=s.profiles.findIndex(x=>x.name===h.name);g>=0?s.profiles[g]=h:s.profiles.push(h)}),a||localStorage.setItem(t,JSON.stringify(o));let c=_()||{user:"",focus:"",filters:[],tagFilters:[],activeButton:null,totalTickets:0,displayedTickets:0,uselessOpacity:.2,currentProfileIndex:0,highPrio:!1};const p={name:"",addBgHighlight:!1,addBadgeHighlight:!1,addBorderHighlight:!1,addPriorityBadge:!1,useTagCloudWhitelist:!1,tagCloudWhitelist:[],departments:[],cardStyle:"classic"};Array.isArray(s.profiles)||(s.profiles=[]),s.profiles[c.currentProfileIndex]||(c.currentProfileIndex=0,k());let f={...p,...s.profiles[c.currentProfileIndex]||{}};Array.isArray(f.departments)||(f.departments=[]),Array.isArray(c.tagFilters)||(c.tagFilters=[]),Array.isArray(c.filters)||(c.filters=[]);function k(){localStorage.setItem(e,JSON.stringify(c))}function _(){const h=localStorage.getItem(e);return h?JSON.parse(h):null}S();function S(){dn()&&wr(f.cardStyle||"classic"),document.querySelector(".agile-board")&&(document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity),m(),b(),v(),qt(),nt(),te(),_e(),Ye(),T(),vt(),buildCompactCards());const g=document.querySelector("#issue-form");if(!g)return;xt(),ce();const x=new MutationObserver(()=>{ce()});g&&x.observe(g,{childList:!0,subtree:!0})}function m(){const h=`
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
        `,g=document.createElement("style");g.type="text/css",g.innerText=h,document.head.appendChild(g)}function b(){wr(f.cardStyle||"classic")}function v(){const h=document.querySelector(".contextual");h.innerHTML="";const g=V("Reset",()=>{K(),te()}),x=ge("input","Suche nach MA",G),w=ge("input","Suche nach Kunde",me),C=ee(),A=B(),L=document.createElement("select");L.className="profile-selector",s.profiles.forEach((P,y)=>{const I=document.createElement("option");I.value=y,I.textContent=P.name,y===c.currentProfileIndex&&(I.selected=!0),L.appendChild(I)}),L.addEventListener("change",P=>{const y=parseInt(P.target.value,0);c.currentProfileIndex=y,k(),window.location.reload()});const M=f.departments.filter(P=>!P.noFilterButton).map(P=>ie(P.identifier,P.labels.map(y=>y.toLowerCase()),P.color));h.append(L,g,x,w,...M,A,$(),W("zzz","oldOnly","#7f77dd","Nur Tickets, die seit 14+ Tagen nicht aktualisiert wurden (Spinnweben)"),F(),C)}function B(){const h=document.createElement("div");h.className="tag-filter-menu";const g=document.createElement("button");g.name="board-filter",g.textContent="Tags";const x=document.createElement("div");x.className="tag-filter-menu-panel",x.hidden=!0;const C=[...(s.tags||[]).map(A=>({...A,filterLabel:A.label.toLowerCase(),buttonLabel:A.label})),...(s.dynamicTags||[]).map(A=>{const L=A.label.replace(/\.\.\.|[.…]/g,"").trim();return{...A,filterLabel:L.toLowerCase(),buttonLabel:L}})].map(A=>{const L=document.createElement("button");L.name="board-filter",L.className="tag-filter-button",L.textContent=A.buttonLabel,L.style.borderColor=A.color,L.style.setProperty("--border-color",A.color);const M=A.filterLabel,P=c.tagFilters.includes(M);return L.classList.toggle("active",P),L.addEventListener("click",()=>{const y=c.tagFilters.includes(M)?c.tagFilters.filter(I=>I!==M):[...c.tagFilters,M];c.tagFilters=y,L.classList.toggle("active",c.tagFilters.includes(M)),k(),te()}),L});return g.addEventListener("click",()=>{x.hidden=!x.hidden}),document.addEventListener("click",A=>{h.contains(A.target)||(x.hidden=!0)}),x.append(...C),h.append(g,x),h}function F(){const h=document.createElement("button");h.type="button",h.name="reset-button",h.className="toggle-lanes-button";const g=()=>Array.from(document.querySelectorAll(".agile-board table.issues-board:not(.sticky) tr.group.swimlane")).filter(w=>w.style.display!=="none"&&w.querySelector(".expander")),x=()=>{const w=g().some(C=>C.classList.contains("open"));h.textContent=w?"Alle zuklappen":"Alle aufklappen"};return h.addEventListener("click",()=>{const w=g(),C=w.some(A=>A.classList.contains("open"));w.filter(A=>A.classList.contains("open")===C).forEach(A=>A.querySelector(".expander").click()),x()}),document.addEventListener("click",w=>{w.target.closest?.("tr.group")&&setTimeout(x,0)}),setTimeout(x,0),h}function W(h,g,x,w){const C=document.createElement("button");return C.type="button",C.name="board-filter",C.textContent=h,C.title=w,C.style.borderColor=x,C.style.setProperty("--border-color",x),c[g]&&C.classList.add("active"),C.addEventListener("click",()=>{c[g]=!c[g],C.classList.toggle("active",c[g]),k(),te()}),C}function $(){const h="#b31814",g=document.createElement("button");return g.name="board-filter",g.textContent="High Prio",g.style.borderColor=h,g.style.setProperty("--border-color",h),c.highPrio&&g.classList.add("active"),g.addEventListener("click",()=>{c.highPrio=!c.highPrio,g.classList.toggle("active",c.highPrio),k(),te()}),g}function ee(){const h=document.createElement("div");h.className="opacity-slider-container";const g=document.createElement("label");g.textContent="Useless Ticket Opacity";const x=document.createElement("input");return x.type="range",x.min=0,x.max=1,x.step=.01,x.value=c.uselessOpacity,x.className="opacity-slider",x.addEventListener("input",w=>{const C=parseFloat(w.target.value);c.uselessOpacity=C,k(),document.documentElement.style.setProperty("--useless-opacity",C)}),h.append(g,x),h}function T(){document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity),document.querySelectorAll(".issue-card").forEach(g=>{const w=g.querySelector(".user")?.innerText.trim().toLowerCase()||"",C=f.departments.find(L=>L.labels.some(M=>w.includes(M.toLowerCase()))),A=!C||C.useless===!0;g.classList.toggle("useless",A)})}function G(h){c.user=h?h.target.value.toLowerCase():"",k(),te()}function me(h){c.focus=h?h.target.value.toLowerCase():"",k(),te()}function V(h,g){const x=document.createElement("button");return x.name="reset-button",x.textContent=h,x.addEventListener("click",g),x}function K(){c.filters=[],c.tagFilters=[],c.user="",c.focus="",c.activeButtons=[],c.totalTickets=0,c.displayedTickets=0,c.uselessOpacity=.2,c.highPrio=!1,c.oldOnly=!1,k(),document.querySelectorAll(".contextual input").forEach(h=>{h.value=""}),document.querySelectorAll(".contextual button.active").forEach(h=>h.classList.remove("active")),document.querySelectorAll(".tag-filter-menu-panel button.active").forEach(h=>h.classList.remove("active")),document.querySelectorAll(".tag-filter-menu-panel").forEach(h=>{h.hidden=!0}),document.querySelector(".opacity-slider").value=.2,document.documentElement.style.setProperty("--useless-opacity",c.uselessOpacity)}function ie(h,g,x=null){const w=document.createElement("button");return w.name="board-filter",w.textContent=h,w.style.borderColor=x,w.style.setProperty("--border-color",x),Array.isArray(c.activeButtons)||(c.activeButtons=[]),c.activeButtons.includes(h)&&w.classList.add("active"),x&&w.addEventListener("click",()=>{c.activeButtons.includes(h)?(c.activeButtons=c.activeButtons.filter(A=>A!==h),w.classList.remove("active")):(c.activeButtons.push(h),w.classList.add("active")),Se(g,c.activeButtons.includes(h)),k()}),w}function ge(h,g,x){const w=document.createElement("div");w.className="input-container";const C=document.createElement(h);C.className="live_search_field",C.placeholder=g,g.toLowerCase().includes("namen")?C.value=c.user||"":g.toLowerCase().includes("fokus")&&(C.value=c.focus||"");const A=document.createElement("div");return A.className="clear-button",A.textContent="x",A.addEventListener("click",()=>{C.value="",x()}),w.append(C),w.append(A),C.addEventListener("input",x),w}function Se(h,g){Array.isArray(c.filters)||(c.filters=[]),g?h.forEach(x=>{c.filters.includes(x)||c.filters.push(x)}):c.filters=c.filters.filter(x=>!h.includes(x)),te(),k()}function te(){const h=document.querySelectorAll(".issue-card");c.totalTickets=h.length,c.displayedTickets=0,h.forEach(g=>{bt(g)?(g.style.display="block",c.displayedTickets++):g.style.display="none"}),z(),Ye(),we()}function we(){const h=!!c.focus||!!c.user||!!c.highPrio||Array.isArray(c.filters)&&c.filters.length>0||Array.isArray(c.tagFilters)&&c.tagFilters.length>0;document.querySelectorAll("tr.group.swimlane").forEach(g=>{if(g.getAttribute("data-merged-away")==="true")return;const x=g.getAttribute("data-id"),w=[];let C=g.nextElementSibling;for(;C&&C.classList.contains("swimlane")&&!C.classList.contains("group")&&C.getAttribute("data-id")===x;)w.push(C),C=C.nextElementSibling;const A=w.some(M=>Array.from(M.querySelectorAll(".issue-card")).some(P=>P.style.display!=="none")),L=h&&!A;g.style.display=L?"none":"",w.forEach(M=>{M.style.display=L?"none":""})})}function z(){const h=document.querySelector(".contextual");let g=document.querySelector("#ticket-info");g||(g=document.createElement("span"),g.id="ticket-info",g.style.color="black",h.prepend(g)),g.textContent=`Tickets ${c.displayedTickets} / ${c.totalTickets}`,k()}function bt(h){const g=h.querySelector(".project")?.textContent.toLowerCase()||"",x=h.querySelector(".user")?.textContent.toLowerCase().trim()||"",w=Array.from(h.querySelectorAll(".tag-label-color")).map(I=>I.textContent.toLowerCase().trim()),C=c.filters.length===0||c.filters.some(I=>x.includes(I)),A=!c.focus||g.includes(c.focus.toLowerCase()),L=!c.user||x.includes(c.user.toLowerCase()),M=c.tagFilters.length===0||w.some(I=>c.tagFilters.some(O=>I.includes(O))),P=!c.highPrio||h.classList.contains("bk-orange"),y=!c.oldOnly||!!h.querySelector(".semi-old");return C&&A&&L&&M&&P&&y}function qt(){document.querySelectorAll(".issue-card a").forEach(g=>g.setAttribute("target","blank"))}function nt(){(document.querySelectorAll(".issue-card")||[]).forEach(g=>{ot(g),be(g)})}function ot(h){const g=h.querySelector(".user");if(!g)return;const x=g.innerText.trim(),w=f.departments.find(A=>A.labels.some(L=>x.includes(L)));if(w?(h.style.setProperty("--border-color",w.color),h.setAttribute("data-department",w.identifier),h.classList.toggle("highlight-badge",f.addBadgeHighlight===!0)):h.style.setProperty("--border-color","white"),h.classList.toggle("highlight-background",f.addBgHighlight===!0),h.classList.toggle("highlight-border",f.addBorderHighlight===!0),!f.addPriorityBadge)return;h.classList.contains("bk-orange")&&(h.classList.add("prio-badge"),h.setAttribute("data-prio","H"),h.style.setProperty("--prio-color","#b31814"))}function be(h){const g=h.querySelector(".attributes");if(!g)return;const x=g.innerHTML.match(/Aktualisiert<\/b>:\s*([\d.]+\s[\d:]+)/);if(!x)return;const w=x[1],[C,A,L]=w.split("."),[M,P]=L.split(" "),[y,I]=P.split(":"),O=new Date(parseInt(M),parseInt(A)-1,parseInt(C),parseInt(y),parseInt(I)),re=new Date-O,Q=Math.floor(re/(1e3*60*60*24));if(Q>=14){g.className="last-status-change";const ne=$t();if(ne.classList.add("semi-old"),h.append(ne),Q>=30){const it=$t();it.classList.add("too-old"),h.append(it)}setTimeout(()=>{h.classList.add("loaded")},500)}}function _e(){[...s.tags,...s.dynamicTags],document.querySelectorAll(".tag-label-color a").forEach(h=>{const g=h.textContent.trim();let x=s.tags.find(w=>w.label===g);if(x||(x=s.dynamicTags.find(w=>{const C=w.label.replace(/\.\.\.|[.…]/g,"").trim().toLowerCase();return g.toLowerCase().includes(C)})),x&&(x.color&&h.parentElement.style.setProperty("--tag-color",x.color),x.gifUrl&&(h.parentElement.style.background="var(--tag-color)",h.parentElement.style.border="4px solid var(--tag-color) !important",!h.parentElement.querySelector(".tag-gif")))){const w=document.createElement("img");w.src=x.gifUrl,w.style.width="100%",w.style.maxHeight="200px",h.parentElement.appendChild(w)}})}function Ye(){document.querySelectorAll(".issue-status-col").forEach(g=>{const x=Array.from(g.querySelectorAll(".issue-card"));x.sort((w,C)=>{const A=w.querySelector(".user"),L=C.querySelector(".user"),M=A?.textContent.trim()||"",P=L?.textContent.trim()||"",y=f.departments.find(re=>re.labels.some(Q=>M.includes(Q))),I=f.departments.find(re=>re.labels.some(Q=>P.includes(Q))),O=y?y.sort:999,X=I?I.sort:999;return O-X}),x.forEach(w=>g.appendChild(w))})}function $t(){const g=document.createElementNS("http://www.w3.org/2000/svg","svg");return g.id="web",g.setAttribute("viewBox","0 0 40 40"),g.innerHTML='<path d="m 32.682208,39.6875 c 2.267113,1.18e-4 4.531865,-0.03587 6.789662,-0.1465 0.256176,-0.01266 0.28388,-0.382313 0.08425,-0.474728 0.13765,-1.525455 0.05703,-3.096879 0.06304,-4.6255 0.0064,-1.635908 0.01021,-3.27146 0.01134,-4.907372 l 0.0057,-9.814737 c 0.0034,-6.548068 0.02835,-13.0874013 -0.183535,-19.63071912 -0.0037,-0.11708738 -0.160857,-0.11743009 -0.164561,0 -0.101103,3.12496942 -0.147326,6.24935742 -0.168454,9.37401022 -1.014734,0.5949919 -1.943502,1.1523139 -3.141585,1.2004179 -1.200661,0.04809 -2.070747,-0.493429 -3.158879,-0.9086587 -0.02985,-0.011537 -0.05741,-0.00894 -0.08311,-0.00192 -0.661445,-2.6780931 -1.373,-5.3381368 -2.184383,-7.9522978 -0.05197,-0.1674037 -0.272995,-0.1011395 -0.23932,0.072931 0.524074,2.7186009 1.136585,5.4203161 1.777179,8.1148663 -1.228356,1.1760582 -2.535263,2.1413292 -4.117192,2.6641612 -0.795392,0.262691 -1.617994,0.421159 -2.44823,0.451242 -0.655446,0.02351 -1.336689,-0.141456 -1.983568,-0.05378 -1.603634,-2.652144 -3.152133,-5.3793132 -4.951124,-7.8719441 -0.103975,-0.1439772 -0.301078,0.040187 -0.22424,0.1922395 1.442558,2.8572226 3.190005,5.5416926 4.849042,8.2533306 -0.538357,1.38399 -0.933424,2.734076 -1.829061,3.931335 -0.479229,0.64025 -1.032384,1.222195 -1.644423,1.704198 -0.554912,0.437384 -1.207169,0.696897 -1.751521,1.134279 -0.0155,0.01239 -0.02532,0.0265 -0.03666,0.04018 -2.756311,-2.335022 -5.549044,-4.617361 -8.4430101,-6.705522 -0.1190932,-0.08575 -0.2656253,0.117174 -0.1545072,0.221309 2.6392123,2.469843 5.3973103,4.793862 8.1724683,7.091859 -0.349001,2.01442 -0.931794,3.907594 -1.991939,5.619459 -0.537779,0.868118 -1.174967,1.663874 -1.891529,2.355708 -0.726847,0.701334 -1.574424,1.141064 -2.347826,1.735106 C 9.2033832,30.032015 9.3407433,30.07344 8.1771294,29.701829 L 6.1341367,29.077275 c -0.1870861,-0.05283 -2.6714972,-1.081291 -3.0346875,-0.75571 -0.3631763,0.325574 5.2191543,2.024185 7.8606538,2.903382 0.01625,0.05981 0.0548,0.108492 0.108208,0.134146 0.05314,1.199794 0.287396,2.355485 0.175144,3.578382 -0.134514,1.463741 -0.586918,2.737486 -1.106138,4.066089 -3.3497848,-9.29e-4 -6.6993195,0.03241 -10.04224732,0.179258 -0.1265391,0.006 -0.12680411,0.212204 -5.29e-4,0.217581 6.55268442,0.288368 13.13131632,0.14141 19.68836932,0.14964 1.939783,0.0025 3.884434,0.03112 5.830787,0.06119 0.03666,0.0614 0.110098,0.08865 0.18463,0.05131 0.02721,-0.01359 0.05378,-0.03113 0.07975,-0.0476 2.267367,0.03543 4.537049,0.07221 6.804167,0.07232 z M 19.782854,39.034132 c -1.190948,0.0016 -2.38291,-0.0036 -3.575004,-0.0086 0.931339,-1.44412 1.49065,-3.861142 1.209335,-5.682511 1.232639,0.389593 2.466659,0.773474 3.703295,1.147875 0.0021,6.59e-4 0.0042,0.0013 0.006,0.0019 0.09139,0.606701 0.208214,1.200948 0.15394,1.837715 -0.08995,1.058957 -0.565463,1.791685 -0.941025,2.70063 -0.185349,6.58e-4 -0.37134,0.0031 -0.556695,0.0031 z m 1.110042,-0.0063 c 0.840803,-1.036488 1.16268,-3.008024 0.737426,-4.385047 1.517956,0.457003 3.03866,0.903108 4.562327,1.337642 0.07253,0.500363 0.137348,0.988013 0.06081,1.518757 -0.0774,0.537391 -0.341972,0.992017 -0.518763,1.470543 -1.615632,0.02467 -3.229872,0.04861 -4.841792,0.0581 z m -4.96116,-0.0031 c -1.744146,-0.0075 -3.489196,-0.01663 -5.234487,-0.01915 1.143536,-2.037844 1.689426,-5.385779 0.792648,-7.602438 0.190224,0.06361 0.380448,0.126749 0.570086,0.191001 1.595917,0.539607 3.19603,1.062663 4.799951,1.573152 -0.02532,0.999774 0.06066,1.978525 -0.112668,2.999189 -0.169928,0.999458 -0.525635,1.907218 -0.815514,2.858254 z m 21.89738,-0.04697 c -1.479967,-0.05032 -2.963175,-0.07127 -4.446854,-0.07666 0.0474,-0.103492 0.08387,-0.213209 0.111004,-0.320812 0.03288,-0.130075 0.08156,-0.377833 0.06471,-0.582282 1.416284,0.37187 2.839449,0.717378 4.271148,0.979743 z m -11.425058,-0.01787 c 0.205039,-0.426939 0.319143,-0.945746 0.37595,-1.341351 0.06625,-0.461119 0.08341,-0.984679 -0.0011,-1.473015 1.15557,0.326928 2.312335,0.648844 3.471292,0.960581 0.01096,0.0028 0.02192,0.0058 0.03288,0.0086 0.164787,0.370922 0.302627,0.704861 0.278362,1.145407 -0.01096,0.201603 -0.05643,0.428165 -0.123855,0.647805 -1.344309,0.01141 -2.689499,0.03133 -4.033525,0.05193 z m 4.468617,-0.05502 c 0.06282,-0.169002 0.101443,-0.358375 0.116032,-0.575482 0.02306,-0.344652 -0.02116,-0.736492 -0.159534,-1.0669 0.79196,0.214892 1.586442,0.432684 2.382405,0.644095 -0.0064,0.08133 -0.0037,0.163386 -0.0029,0.207694 0.0057,0.306674 -0.09082,0.540704 -0.201941,0.785031 -0.711139,-0.0013 -1.422754,5.09e-4 -2.13418,0.0056 z m 8.305786,-0.03462 c -0.0037,-0.0044 -0.01285,-0.0091 -0.01663,-0.01359 -0.03666,-0.03924 -0.07499,-0.07759 -0.112668,-0.116208 -0.24446,-1.922959 -0.625518,-3.837638 -1.033065,-5.738761 0.02381,-0.134187 0.01965,-0.267289 -0.0155,-0.388187 0.215623,0.21774 0.508307,0.314172 0.811614,0.29423 0.08738,-0.0057 0.205835,-0.02779 0.324662,-0.06799 -5.29e-4,0.459535 -0.0024,0.918602 -5.29e-4,1.377822 0.006,1.5359 -0.07926,3.116166 0.04241,4.652699 z m -0.818304,-0.166281 c -1.429137,-0.458586 -2.879931,-0.845525 -4.333625,-1.218342 0.245633,-0.228821 0.430399,-0.541659 0.54721,-0.877133 0.09226,-0.265213 0.161499,-0.602638 0.148384,-0.921021 1.187232,1.052628 2.389687,2.086665 3.638038,3.016496 z m 0.354785,-0.448147 c -0.703717,-1.373226 -1.484504,-2.709547 -2.286465,-4.030237 0.416402,-0.07184 0.846934,-0.150895 1.172519,-0.451239 0.336152,1.507416 0.690974,3.009823 1.113946,4.481476 z M 37.71646,37.407207 c -0.769118,-0.732029 -1.567756,-1.435496 -2.37571,-2.126382 0.136818,-0.0576 0.266494,-0.136116 0.379869,-0.223148 0.1008,-0.07722 0.217172,-0.182275 0.316272,-0.304122 0.545492,0.89755 1.100657,1.787432 1.679565,2.653652 z m -4.089859,-0.02471 c -0.789969,-0.201282 -1.580224,-0.400072 -2.367903,-0.605154 0.323,-0.286419 0.601612,-0.681891 0.791529,-0.994577 0.317028,-0.521884 0.600551,-1.213394 0.609689,-1.872949 0.01625,-0.0063 0.0325,-0.01097 0.0491,-0.01792 0.524354,0.464918 1.04861,0.936293 1.575254,1.405638 -0.0076,0.394024 0.05133,0.766958 -0.07979,1.168893 -0.119963,0.368702 -0.330257,0.657825 -0.577892,0.916075 z m -3.007155,-0.773905 c -0.204208,-0.05444 -0.408284,-0.107485 -0.611914,-0.163188 -1.142395,-0.312056 -2.283176,-0.631873 -3.423284,-0.955636 -0.01324,-0.02975 -0.02948,-0.05835 -0.04407,-0.08716 0.803676,-0.247176 1.502786,-1.280335 1.90548,-2.02439 0.409267,-0.756398 0.690921,-1.636691 0.747471,-2.525698 0.823092,0.705446 1.645811,1.41191 2.467191,2.120203 0.236749,0.204133 0.472786,0.411126 0.708976,0.61937 -0.0064,0.01991 -0.01285,0.03971 -0.0189,0.05996 -0.0155,0.02689 -0.02381,0.05707 -0.02721,0.08777 -0.185084,0.622525 -0.301796,1.226384 -0.658213,1.793209 -0.28218,0.448458 -0.705187,0.720142 -1.045336,1.075554 z m -4.504312,-1.25234 c -1.449701,-0.413644 -2.897425,-0.83513 -4.34255,-1.269031 1.038435,-0.435798 1.989116,-1.424751 2.621146,-2.323568 0.779684,-1.109278 1.306646,-2.440268 1.36719,-3.843558 1.018445,0.867483 2.036165,1.736023 3.052895,2.606672 -0.10938,0.924134 -0.302363,1.781083 -0.753602,2.601727 -0.471237,0.857041 -1.212911,1.291404 -1.750407,2.03799 -0.09195,0.0041 -0.178128,0.09008 -0.194683,0.189765 z m 8.808932,-0.428985 c -0.543494,-0.460802 -1.088672,-0.918073 -1.631595,-1.373494 0.500082,-0.369024 0.943549,-0.916669 1.109483,-1.524322 0.456957,0.760198 0.912931,1.526814 1.373888,2.290808 -0.09052,0.124377 -0.177789,0.255598 -0.29231,0.348011 -0.17537,0.141469 -0.363553,0.206464 -0.559481,0.258998 z m 1.344322,-0.966762 c -0.517219,-0.847546 -1.041861,-1.688521 -1.559078,-2.52879 0.784536,-0.177877 1.586997,-0.69734 2.061664,-1.432215 0.244461,1.089021 0.478789,2.187815 0.72069,3.285384 -0.05227,0.08292 -0.122116,0.160577 -0.218646,0.23242 -0.291894,0.21774 -0.67075,0.313761 -1.004616,0.443202 z M 20.976031,33.848017 c -1.237495,-0.375351 -2.472587,-0.759204 -3.706089,-1.149112 -0.0064,-0.02057 -0.01247,-0.04091 -0.01852,-0.06181 1.351737,-0.496883 2.491706,-2.324495 3.147723,-3.603725 0.634309,-1.236507 1.36693,-3.052181 1.258971,-4.576053 0.79168,0.657969 1.581978,1.317092 2.366228,1.982975 0.476664,0.404444 0.952175,0.811688 1.428555,1.217107 -0.256176,1.348222 -0.678173,2.618899 -1.457003,3.719315 -0.809097,1.143459 -1.799948,1.657803 -2.851521,2.358183 -0.04112,-0.013 -0.08939,0.01463 -0.0954,0.06367 -0.02419,0.01646 -0.04849,0.03266 -0.07306,0.04945 z m 12.00128,-0.559412 c -0.410693,-0.344968 -0.819468,-0.690348 -1.222162,-1.037849 -0.704858,-0.607965 -1.413393,-1.210947 -2.119679,-1.816695 0.494088,-0.109826 0.997212,-0.444273 1.313084,-0.754744 0.346129,-0.340235 0.901513,-1.113857 0.957205,-1.761065 0.646017,1.062438 1.290088,2.126545 1.937829,3.187718 0.111382,0.182281 0.222198,0.365672 0.333014,0.548905 -0.147061,0.345922 -0.280705,0.690105 -0.513185,0.995197 -0.200769,0.263313 -0.430209,0.471429 -0.686106,0.638533 z m -16.100626,-0.71337 c -1.563651,-0.496246 -3.124588,-1.003172 -4.682812,-1.519993 -0.0325,-0.01075 -0.06478,-0.02181 -0.09707,-0.03291 1.493113,-0.77855 2.863604,-2.441154 3.740676,-3.793489 1.113813,-1.717565 1.891132,-3.802043 2.002519,-5.929772 1.130966,0.935215 2.263912,1.868015 3.392594,2.803859 -0.195628,0.69437 -0.223672,1.453083 -0.403295,2.158526 -0.232177,0.910527 -0.575745,1.780658 -1.012424,2.593074 -0.410118,0.763045 -0.901897,1.468401 -1.464804,2.100422 -0.447819,0.502577 -0.996305,0.904256 -1.386717,1.461271 -0.02646,0.01992 -0.04879,0.04855 -0.06191,0.08716 -0.0029,0.0044 -0.006,0.0086 -0.0087,0.013 -0.01209,0.01932 -0.01663,0.03911 -0.01776,0.05873 z M 38.61063,32.442953 c -0.209688,-0.02193 -0.40517,-0.117374 -0.584026,-0.252199 -0.05968,-0.04557 -0.135419,-0.01834 -0.177373,0.0383 -0.161348,-0.742159 -0.324284,-1.482932 -0.482507,-2.22034 -0.05227,-0.24401 -0.105864,-0.486941 -0.158401,-0.730634 0.261318,0.232297 0.756358,0.266324 1.03139,0.244778 0.319296,-0.02522 0.638943,-0.129227 0.901976,-0.325144 0,0.112042 -2.65e-4,0.224215 0,0.33626 2.64e-4,0.92192 -0.0029,1.843614 -0.0049,2.765535 -0.0994,0.06141 -0.199862,0.123873 -0.311245,0.139698 -0.07291,0.01041 -0.144869,0.01108 -0.214753,0.0038 z m -4.143967,-1.408112 c -0.124535,-0.203183 -0.249525,-0.406282 -0.372625,-0.609479 -0.547492,-0.903564 -1.096632,-1.806038 -1.644982,-2.709282 0.688578,0.0522 1.409068,-0.201175 1.97855,-0.611334 0.490088,-0.35289 1.065855,-0.961172 1.320895,-1.634967 0.302174,1.338728 0.603981,2.677305 0.907001,4.015401 -0.571768,0.80039 -1.22124,1.349012 -2.188847,1.549661 z m -5.338799,-1.03599 c -0.945334,-0.810201 -1.888865,-1.622219 -2.835907,-2.42989 1.479397,-0.482952 2.641453,-2.481333 2.86993,-4.163135 0.802248,1.321009 1.605808,2.641239 2.408628,3.962243 -7.95e-4,0.0072 -0.0013,0.01367 -0.0011,0.02095 -0.181344,0.206646 -0.190188,0.471769 -0.286151,0.742996 -0.142526,0.402562 -0.358376,0.772548 -0.644271,1.068141 -0.288453,0.298129 -0.632219,0.507845 -1.003497,0.650899 -0.166792,0.06455 -0.339667,0.09837 -0.507611,0.147739 z m 8.99245,-0.907424 c -0.346696,-0.0056 -0.659196,-0.285433 -0.986205,-0.224986 -0.0053,9.28e-4 -0.0091,0.0048 -0.01398,0.0067 -0.286187,-1.327338 -0.572158,-2.653828 -0.864607,-3.978315 0.627743,0.240205 1.401079,0.250506 1.990265,0.04633 0.317293,-0.11012 0.668185,-0.313177 0.909232,-0.599591 -0.0064,1.458996 -0.01096,2.917714 -0.0121,4.376395 -0.315856,0.214897 -0.630339,0.379351 -1.022467,0.373366 z m -5.988085,-1.895199 c -0.896782,-1.476083 -1.792981,-2.952547 -2.68976,-4.428314 1.777561,0.599105 4.175567,-0.09084 5.266841,-1.85997 0.289588,1.257396 0.57484,2.51567 0.859583,3.774329 -0.44125,0.641199 -0.65985,1.358431 -1.30416,1.856259 -0.662873,0.512073 -1.376526,0.598199 -2.132504,0.657696 z m -6.313853,-0.03207 c -0.395553,-0.337073 -0.790062,-0.674847 -1.1859,-1.01127 -0.69915,-0.594043 -1.397137,-1.192853 -2.095137,-1.79259 0.946758,-0.238622 2.000954,-1.31425 2.485041,-1.956397 0.708002,-0.939325 1.285806,-2.329341 1.319221,-3.638958 0.767118,1.262773 1.534677,2.525472 2.302082,3.787928 0.07998,0.131665 0.160441,0.263929 0.240416,0.395595 -0.207345,0.916222 -0.502906,1.764705 -1.048686,2.519517 -0.57805,0.799125 -1.306185,1.15434 -2.017037,1.696166 z m 11.526007,-2.645617 c -0.399719,-0.0077 -0.795774,-0.101693 -1.192039,-0.103842 -0.267893,-1.20834 -0.526761,-2.416433 -0.80436,-3.623506 1.128969,0.810516 2.990973,0.09315 3.847771,-1.177545 v 0.104475 c 0,1.264354 -0.01964,2.528515 -0.02457,3.792874 -0.456962,0.453843 -0.760031,0.865798 -1.425763,0.980368 -0.134249,0.02309 -0.267818,0.02992 -0.401065,0.02736 z m -15.343119,-0.61937 c -1.219222,-1.048512 -2.439555,-2.09978 -3.666479,-3.142594 1.353445,-0.330105 2.704735,-1.770506 3.517544,-2.910799 0.739415,-1.038067 1.474227,-2.425148 1.619882,-3.800905 0.789106,1.298536 1.578508,2.596644 2.367903,3.894862 -0.215057,1.546663 -0.341103,2.855076 -1.339862,4.124812 -0.418686,0.532644 -0.92382,0.969791 -1.479311,1.315392 -0.339591,0.211093 -0.713516,0.302445 -1.019677,0.519232 z m 7.281651,-1.393894 c -0.128504,-0.211734 -0.257197,-0.423083 -0.386004,-0.634821 -0.638314,-1.051047 -1.276651,-2.10206 -1.914963,-3.153106 1.223789,0.466498 2.654086,0.339679 3.819325,-0.215111 0.983602,-0.46808 2.237864,-1.494298 2.693108,-2.709282 0.380131,1.563749 0.756842,3.127227 1.118407,4.692877 -0.580337,0.58233 -1.132422,1.139899 -1.879262,1.493413 -1.046145,0.494982 -2.066128,0.490891 -3.172822,0.302276 -0.155642,-0.0265 -0.260069,0.094 -0.277796,0.223746 z m 7.461262,-1.963811 c -0.541894,-0.01496 -1.020905,-0.231098 -1.575252,-0.326983 -0.341558,-1.487481 -0.678942,-2.979334 -1.020235,-4.472824 1.629911,0.753234 4.017962,0.123415 4.955582,-1.555224 -0.0011,1.65806 -5.29e-4,3.316047 5.29e-4,4.974744 -0.559201,0.555432 -1.016831,1.115977 -1.792801,1.316626 -0.199786,0.05168 -0.387217,0.06866 -0.567853,0.06366 z m -8.078199,-2.183871 c -0.706965,-0.0034 -1.415939,-0.15894 -2.132509,-0.380164 -0.887639,-1.461206 -1.775343,-2.922281 -2.662982,-4.383808 1.356593,0.496565 3.326679,-0.01239 4.532761,-0.46731 1.430278,-0.539924 2.788088,-1.430198 3.793108,-2.690122 0.367862,1.539382 0.743991,3.076907 1.11841,4.613757 -0.353009,0.449091 -0.582128,0.998265 -0.948837,1.447673 -0.44639,0.5472 -0.983931,1.000206 -1.580833,1.327134 -0.707567,0.387857 -1.412156,0.536272 -2.119118,0.532832 z m 6.810857,-2.953445 c -0.483875,-0.01582 -0.96552,-0.116661 -1.461459,-0.242299 -0.375838,-1.639391 -0.757348,-3.278936 -1.156902,-4.912313 1.631339,1.473236 4.719282,1.198641 6.257511,-0.3739649 -0.0068,1.1247839 -0.0076,2.2499109 -0.0094,3.3750149 -0.68915,0.728862 -1.213216,1.487154 -2.154265,1.885927 -0.505648,0.214255 -0.99153,0.28355 -1.475405,0.267648 z" />',g}function ce(){const h=s.tags,g=s.dynamicTags,x=document.getElementById("issue_tag_list"),w=window.jQuery&&window.jQuery(x),C=document.getElementById("issue_tags");if(!C)return;const A=C.querySelector(".select2-selection__rendered"),L=document.createElement("div");L.className="tag-cloud-buttons",L.style.cssText="margin-top:10px; display:flex; flex-wrap:wrap; gap:6px;",h.forEach(P=>{M({...P,isDynamic:!1})}),g.forEach(P=>{M({...P,isDynamic:!0})});function M(P){const y=document.createElement("button");y.textContent=P.label,y.type="button",y.style.cssText=`
            margin: 2px;
            padding: 4px 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.875em;
            color: white;
            background: ${P.color||"#333"};
        `,L.appendChild(y);const I=()=>{const O=Array.from(x.options).some(X=>X.selected&&X.value===P.label);y.classList.toggle("selected",O)};I(),x.addEventListener("change",I),y.addEventListener("click",()=>{if(P.isDynamic){const X=prompt(P.prompt);if(!X)return;const re=P.valueTemplate.replace("{value}",X);let Q=Array.from(x.options).find(ne=>ne.value===re);Q?Q.selected=!0:(Q=new Option(re,re,!0,!0),x.add(Q)),w.trigger("change");return}const O=Array.from(x.options).find(X=>X.value===P.label);if(O&&O.selected)O.selected=!1;else if(O)O.selected=!0;else{const X=new Option(P.label,P.label,!0,!0);x.add(X)}w.trigger("change"),I()})}C.querySelector(".tag-cloud-buttons")||A.parentElement.insertAdjacentElement("afterend",L)}function yr(){const g=new URLSearchParams(window.location.search).get("query_id");return g||(document.querySelector("tr.group.swimlane")?"default-board":null)}function vt(){const h=yr();if(!h)return;const g=document.querySelector(".list.issues-board tbody");if(!g)return;const x=Array.from(g.querySelectorAll("tr.group.open.swimlane"));s?.swimlanes?.length&&(x.sort((w,C)=>{const A=w.getAttribute("data-id"),L=C.getAttribute("data-id"),M=s.swimlanes.find(y=>y.identifier===A&&y.boardId===h),P=s.swimlanes.find(y=>y.identifier===L&&y.boardId===h);return M&&P?M.sort-P.sort:M?-1:P?1:0}),x.forEach(w=>{const C=w.getAttribute("data-id"),A=[];let L=w.nextElementSibling;for(;L&&L.classList.contains("swimlane")&&L.getAttribute("data-id")===C;)A.push(L),L=L.nextElementSibling;g.appendChild(w),A.forEach(M=>g.appendChild(M))})),kt(x,h),we(),x.forEach(w=>{if(w.style.display==="none")return;const C=w.querySelector("a[href]");if(!C||w.querySelector(".createNewTicket"))return;const L=(Array.isArray(w.__ticketChoices)?w.__ticketChoices:[{label:C.textContent.trim(),href:C.href}]).filter((I,O,X)=>I.href&&X.findIndex(re=>re.href===I.href)===O);if(L.length<=1){const I=L[0]?.href||C.href,O=document.createElement("a");O.classList.add("createNewTicket"),O.innerHTML="Neues Ticket",O.href=`${I}/issues/new`,O.target="_blank",C.after(O);return}const M=document.createElement("div");M.className="createNewTicketMenu";const P=document.createElement("button");P.type="button",P.className="createNewTicket",P.textContent="Neues Ticket";const y=document.createElement("div");y.className="createNewTicketMenuPanel",y.hidden=!0,L.forEach(I=>{const O=document.createElement("a");O.href=`${I.href}/issues/new`,O.target="_blank",O.textContent=I.label||I.href,y.appendChild(O)}),P.addEventListener("click",I=>{I.preventDefault(),I.stopPropagation(),y.hidden=!y.hidden}),document.addEventListener("click",I=>{M.contains(I.target)||(y.hidden=!0)}),M.append(P,y),C.after(M)})}function kt(h,g){const x=(s.swimlaneGroups||[]).filter(M=>M.boardId===g);if(!x.length)return;const w=M=>{const P=M.getAttribute("data-id"),y=[];let I=M.nextElementSibling;for(;I&&I.classList.contains("swimlane")&&!I.classList.contains("group")&&I.getAttribute("data-id")===P;)y.push(I),I=I.nextElementSibling;return y},C=M=>{const P=M.querySelector(".count");return P&&parseInt(P.textContent,10)||0},A=new Set;let L=!1;x.forEach(M=>{const P=h.filter(ke=>!A.has(ke)&&(M.laneIdentifiers||[]).includes(ke.getAttribute("data-id")));if(!P.length)return;const[y,...I]=P,O=y.getAttribute("data-id"),X=y.querySelector("a[href]"),re=P.map(ke=>{const Je=ke.querySelector("a[href]");return Je?{label:Je.textContent.trim(),href:Je.href}:null}).filter(Boolean);X&&(X.textContent=M.name),y.setAttribute("data-swimlane-group",M.id),y.__ticketChoices=re;const Q=[];P.forEach(ke=>{Q.push(...w(ke))}),Q.forEach(ke=>{ke.querySelectorAll(".issue-card").forEach(Je=>{Je.setAttribute("data-origin-lane",ke.getAttribute("data-id"))})});const ne=Q.shift();if(ne){ne.setAttribute("data-id",O),ne.setAttribute("data-merged-group",M.id),ne.__groupHeader=y,ne.previousElementSibling!==y&&y.after(ne);const ke=ne.querySelectorAll("td");Q.forEach(Je=>{Je.querySelectorAll("td").forEach((Gi,qi)=>{const Bo=ke[qi];Bo&&Array.from(Gi.querySelectorAll(".issue-card")).forEach($i=>Bo.appendChild($i))}),Je.remove()}),L=!0}let it=C(y);I.forEach(ke=>{it+=C(ke),ke.style.display="none",ke.setAttribute("data-merged-away","true"),A.add(ke)});const zo=y.querySelector(".count");zo&&(zo.textContent=it)}),L&&(Ye(),at())}function at(){if(at.installed)return;at.installed=!0;const h=window.jQuery;let g=null;const x=(A,L)=>{A.setAttribute("data-id",L),h&&h(A).data("id",L)},w=()=>{g&&(g.rows.forEach(A=>x(A,g.primaryId)),g=null)},C=A=>{const L=g;setTimeout(()=>{g===L&&w()},A)};document.addEventListener("mousedown",A=>{const L=A.target.closest?.(".issue-card[data-origin-lane]"),M=L?.closest("tr[data-merged-group]");if(!M)return;w();const P=L.getAttribute("data-origin-lane"),y=M.__groupHeader?.getAttribute("data-id")||M.getAttribute("data-id");if(P===y)return;const I=[M,M.__groupHeader].filter(Boolean);g={rows:I,primaryId:y,originId:P},I.forEach(O=>x(O,P))},!0),h&&h(document).on("sortstop",()=>C(0)),document.addEventListener("mouseup",()=>C(1500),!0),h&&h.ajaxPrefilter&&h.ajaxPrefilter(A=>{if(!g||typeof A.data!="string")return;const{primaryId:L,originId:M}=g;A.data=A.data.replace(/(^|&)([^=&]*project[^=&]*)=([^&]*)/gi,(P,y,I,O)=>O===L?`${y}${I}=${M}`:P)})}function xt(){if(f.useTagCloudWhitelist!==!0)return;const h=["issue_assigned_to_id","issue_status_id"],g=new WeakSet,x=f.tagCloudWhitelist,w={button:`
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
			`};function C(y){return document.querySelector(`#${y.id} ~ .select2 .select2-selection__rendered`)||y.parentElement&&y.parentElement.querySelector(".select2-selection__rendered")||y}function A(){const y=document.createElement("div");return y.style.cssText=w.wrapper,y.addEventListener("click",I=>{const O=I.target.closest("button");if(!O||O.disabled||!O._targetSelect)return;const X=O._targetSelect,re=O.dataset.value,Q=Array.from(X.options).find(it=>it.value===re);if(!Q)return;X.multiple?Q.selected=!Q.selected:X.value=re;const ne=window.jQuery&&window.jQuery(X);ne&&typeof ne.trigger=="function"?ne.trigger("change"):X.dispatchEvent(new Event("change",{bubbles:!0})),L(X,y)}),y}function L(y,I){I.querySelectorAll("button").forEach(O=>{const X=O.dataset.value,re=Array.from(y.options).find(ne=>ne.value===X),Q=y.multiple?!!(re&&re.selected):y.value===X;O.disabled?O.style.cssText=w.buttonDisabled:Q?O.style.cssText=w.buttonActive:O.style.cssText=w.button,O.dataset.value=X,O._targetSelect=y})}function M(y){if(!y||g.has(y))return;g.add(y);const I=C(y);if(!I||I.parentElement&&I.parentElement.querySelector('div[style*="flex-wrap"]'))return;const O=A(),X=document.createDocumentFragment();Array.from(y.options).forEach(Q=>{if(!Q.value||x&&x.length&&!x.includes(Q.innerHTML))return;const ne=document.createElement("button");ne.type="button",ne.textContent=Q.text||Q.label||Q.value,ne.dataset.value=Q.value,ne.disabled=Q.disabled,ne._targetSelect=y,X.appendChild(ne)}),O.appendChild(X),I.insertAdjacentElement("afterend",O),L(y,O);const re=()=>L(y,O);y.addEventListener("change",re),O._cleanup=()=>y.removeEventListener("change",re)}h.forEach(y=>{const I=document.getElementById(y);I&&M(I)});const P=new MutationObserver(y=>{y.forEach(I=>{I.addedNodes.forEach(O=>{O instanceof HTMLElement&&h.forEach(X=>{const re=O.id===X?O:O.querySelector?O.querySelector(`#${X}`):null;re&&M(re)})})})});return P.observe(document.documentElement||document.body,{childList:!0,subtree:!0}),{attach:M,disconnect:()=>{P.disconnect(),document.querySelectorAll('div[style*="flex-wrap"]').forEach(y=>{typeof y._cleanup=="function"&&y._cleanup()})}}}}jo();function Mo(){Fi(),Hi()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>setTimeout(Mo,0),{once:!0}):Mo()})();
