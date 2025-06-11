module.exports = {

"[project]/.next-internal/server/app/offer/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image.png.mjs { IMAGE => \"[project]/app/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/loading.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/app/services/supabase.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = "https://ogxvbjvwbrllggcmfyke.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM";
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
const __TURBOPACK__default__export__ = supabase;
}}),
"[project]/app/services/apiOffers.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getOfferById": (()=>getOfferById),
    "getOffers": (()=>getOffers),
    "invalidateCache": (()=>invalidateCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/supabase.js [app-rsc] (ecmascript)");
;
// Simple in-memory cache
const cache = {
    data: {},
    timeouts: {},
    // Cache duration in milliseconds (30 minutes default)
    DEFAULT_TTL: 1800000,
    set (key, value, ttl = this.DEFAULT_TTL) {
        this.data[key] = value;
        // Clear any existing timeout
        if (this.timeouts[key]) {
            clearTimeout(this.timeouts[key]);
        }
        // Set expiration timeout
        this.timeouts[key] = setTimeout(()=>{
            delete this.data[key];
            delete this.timeouts[key];
        }, ttl);
        return value;
    },
    get (key) {
        return this.data[key];
    },
    has (key) {
        return key in this.data;
    },
    invalidate (key) {
        delete this.data[key];
        if (this.timeouts[key]) {
            clearTimeout(this.timeouts[key]);
            delete this.timeouts[key];
        }
    },
    invalidateAll () {
        Object.keys(this.timeouts).forEach((key)=>{
            clearTimeout(this.timeouts[key]);
        });
        this.data = {};
        this.timeouts = {};
    }
};
async function getOffers() {
    const cacheKey = "all_offers";
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("offered_course").select("*");
    if (error) {
        console.error("Error fetching offers:", error);
        throw new Error("Failed to fetch offers");
    }
    // Store in cache and return
    return cache.set(cacheKey, data);
}
async function getOfferById(id) {
    const cacheKey = `offer_${id}`;
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("offered_course").select("*").eq("id", id).single();
    if (error) {
        console.error("Error fetching offer:", error);
        throw new Error(`Failed to fetch offer with ID ${id}`);
    }
    // Store in cache and return
    return cache.set(cacheKey, data);
}
function invalidateCache(id = null) {
    if (id) {
        // Invalidate specific offer
        cache.invalidate(`offer_${id}`);
    }
    // Always invalidate the collection caches
    cache.invalidate("all_offers");
}
}}),
"[project]/public/homeIcon.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/homeIcon.dacb6bf8.svg");}}),
"[project]/public/homeIcon.svg.mjs { IMAGE => \"[project]/public/homeIcon.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$homeIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/homeIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$homeIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 14,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/rightArrow.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/rightArrow.f851d0a1.svg");}}),
"[project]/public/rightArrow.svg.mjs { IMAGE => \"[project]/public/rightArrow.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightArrow$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/rightArrow.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightArrow$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 5,
    height: 9,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/app/_components/HeadTopOffer.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeadTopOffer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$homeIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$homeIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/homeIcon.svg.mjs { IMAGE => "[project]/public/homeIcon.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightArrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$rightArrow$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/rightArrow.svg.mjs { IMAGE => "[project]/public/rightArrow.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function HeadTopOffer({ children, isCoursesPage = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3 items-center sm:my-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-[14px] h-[12px] sm:w-[16px] sm:h-[14px]",
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$homeIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$homeIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "homeIcon-svg"
                }, void 0, false, {
                    fileName: "[project]/app/_components/HeadTopOffer.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/HeadTopOffer.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-[2px]",
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightArrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$rightArrow$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                alt: "rightArrow-svg"
            }, void 0, false, {
                fileName: "[project]/app/_components/HeadTopOffer.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isCoursesPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "caps-text text-xs sm:text-sm font-regular text-[#6A737D] mt-[5px]",
                children: "შეთავაზება"
            }, void 0, false, {
                fileName: "[project]/app/_components/HeadTopOffer.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/offer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "caps-text text-xs hover:underline sm:text-sm font-regular text-[#6A737D] mt-[5px]",
                            children: "შეთავაზება"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/HeadTopOffer.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/HeadTopOffer.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "mt-[2px]",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightArrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$rightArrow$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "rightArrow-svg"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/HeadTopOffer.jsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "caps-text text-xs sm:text-sm font-regular text-[#6A737D] mt-[5px]",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/app/_components/HeadTopOffer.jsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/HeadTopOffer.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/offer/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OffersPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiOffers.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$HeadTopOffer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/HeadTopOffer.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "შეთავაზებები",
    description: "იდეარუმის აკადემიის სპეციალური შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით, მოიპოვე ღირებული ცოდნა ხელმისაწვდომ ფასებში",
    openGraph: {
        title: "შეთავაზებები - იდეარუმის აკადემია",
        description: "იდეარუმის აკადემიის სპეციალური შეთავაზებები - ისწავლე ახალი უნარები ფასდაკლებით",
        type: "website"
    },
    robots: {
        follow: true,
        index: true
    }
};
async function OffersPage() {
    try {
        const courses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiOffers$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOffers"])();
        // Sort courses by ID in descending order
        const sortedCourses = [
            ...courses
        ].sort((a, b)=>b.id - a.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-sm:max-w-[90%] mt-[80px] py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$HeadTopOffer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cursor-pointer",
                            children: "შეთავაზება"
                        }, void 0, false, {
                            fileName: "[project]/app/offer/page.jsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/offer/page.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/offer/page.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: sortedCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white blog-shadow relative rounded-[20px] p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "mb-5 h-[284px] rounded-[12px] w-full relative",
                                            src: course.image || course.section_image,
                                            alt: course.title,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/offer/page.jsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "absolute max-sm:py-[5px] max-sm:px-4 max-sm:text-sm bg-[#FDB927] top-[10px] right-[10px] px-5 py-[5px] shadow-lg pt-[10px] rounded-full text-[#383838] font-bold caps-text",
                                            children: [
                                                "-",
                                                course.discount_percentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/offer/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-2 mb-6",
                                    children: course.course_category && course.course_category.map((category, id)=>{
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm max-lg:text-xs caps-text font-[500] text-[#383838] bg-[#f4f6f7] py-[6px] px-4 rounded-full",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/app/offer/page.jsx",
                                                lineNumber: 58,
                                                columnNumber: 25
                                            }, this)
                                        }, id, false, {
                                            fileName: "[project]/app/offer/page.jsx",
                                            lineNumber: 57,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg mt-6 text-secondary-800 font-[600] mb-2 caps-text",
                                    children: course.title
                                }, void 0, false, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#434a53] text-sm caps-text mb-6 line-clamp-2",
                                    children: course.text
                                }, void 0, false, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[1px] bg-[#EFF2F5] mb-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#383838] text-xl lg:mr-2 font-bold",
                                                    children: [
                                                        "₾ ",
                                                        course.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/offer/page.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#d95a5a] font-[500] text-xl line-through",
                                                    children: [
                                                        "₾ ",
                                                        course.old_price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/offer/page.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/offer/page.jsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/offer/${course.id}`,
                                            prefetch: false,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full rounded-[10px] bg-primary-500 text-[#fff] hover:bg-primary-600 duration-300  py-[12px] pt-[14px] text-sm caps-text font-bold px-5",
                                                children: "დეტალურად"
                                            }, void 0, false, {
                                                fileName: "[project]/app/offer/page.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/offer/page.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/offer/page.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, course.id, true, {
                            fileName: "[project]/app/offer/page.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/offer/page.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/offer/page.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    } catch (error) {
        console.error("Error loading offers:", error);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-sm:max-w-[90%] mt-[80px] py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$HeadTopOffer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cursor-pointer",
                            children: "შეთავაზება"
                        }, void 0, false, {
                            fileName: "[project]/app/offer/page.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/offer/page.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/offer/page.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white h-[300px] rounded-[20px] p-8 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: "შეთავაზებების ჩატვირთვაში მოხდა შეცდომა"
                    }, void 0, false, {
                        fileName: "[project]/app/offer/page.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/offer/page.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/offer/page.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
}
}}),
"[project]/app/offer/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/offer/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c9f89e77._.js.map