(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/_components/Headline.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Headline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Headline({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[20px] max-sm:text-[19px] text-center leading-[24px] mt-[72px] caps-text font-bold text-secondary-500",
            children: text
        }, void 0, false, {
            fileName: "[project]/app/_components/Headline.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Headline.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Headline;
var _c;
__turbopack_context__.k.register(_c, "Headline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/SeeAllButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SeeAllButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function SeeAllButton({ buttonText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: "caps-text max-sm:w-[100%] w-[210px] h-[56px] pt-3 mt-7 rounded-[12px] font-regular flex text-base text-center justify-center items-center",
            children: buttonText
        }, void 0, false, {
            fileName: "[project]/app/_components/SeeAllButton.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/SeeAllButton.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SeeAllButton;
var _c;
__turbopack_context__.k.register(_c, "SeeAllButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/services/apiBlogs.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearBlogsCache": (()=>clearBlogsCache),
    "getBlog": (()=>getBlog),
    "getBlogs": (()=>getBlogs),
    "getBlogsLimited": (()=>getBlogsLimited)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/supabase.js [app-client] (ecmascript)");
;
// მარტივი კეშის ობიექტი
const cache = {
    data: {},
    expiryTimes: {}
};
// კეშში შენახვის ფუნქცია
function setCache(key, data, ttl = 1800000) {
    // 1 წუთის TTL (Time To Live) ნაგულისხმევად
    cache.data[key] = data;
    cache.expiryTimes[key] = Date.now() + ttl;
}
// კეშის წაკითხვის ფუნქცია
function getCache(key) {
    const now = Date.now();
    if (cache.data[key] && cache.expiryTimes[key] > now) {
        return cache.data[key]; // კეშის დაბრუნება თუ ვალიდურია
    }
    return null; // კეშის ვადა ამოწურულია ან არ არსებობს
}
async function getBlogs(id, ttl = 1800000) {
    const cacheKey = id ? `blog_${id}` : "all_blogs";
    // შემოწმება გვაქვს თუ არა ვალიდური კეში
    const cachedData = getCache(cacheKey);
    if (cachedData) {
        return cachedData;
    }
    try {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("blogs").select("*");
        if (id) {
            query = query.eq("id", id);
            const { data, error } = await query.single();
            if (error) throw error;
            setCache(cacheKey, data, ttl); // შევინახოთ კეშში
            return data;
        } else {
            // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით
            const { data, error } = await query.order("created_at", {
                ascending: false
            });
            if (error) throw error;
            setCache(cacheKey, data, ttl); // შევინახოთ კეშში
            return data;
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
}
async function getBlog(id, ttl = 300000) {
    // 5 წუთის კეში ნაგულისხმევად
    const cacheKey = `blog_detail_${id}`;
    // შემოწმება გვაქვს თუ არა ვალიდური კეში
    const cachedData = getCache(cacheKey);
    if (cachedData) {
        return cachedData;
    }
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("blogs").select("*").eq("id", id).single();
        if (error) throw error;
        setCache(cacheKey, data, ttl); // შევინახოთ კეშში
        return data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw new Error(`Blog with ID ${id} Could Not Be Loaded`);
    }
}
async function getBlogsLimited(id, ttl = 120000) {
    // 2 წუთის კეში ნაგულისხმევად
    const cacheKey = id ? `blog_limited_${id}` : "limited_blogs";
    // შემოწმება გვაქვს თუ არა ვალიდური კეში
    const cachedData = getCache(cacheKey);
    if (cachedData) {
        return cachedData;
    }
    try {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("blogs").select("*");
        if (id) {
            query = query.eq("id", id);
            const { data, error } = await query.single();
            if (error) throw error;
            setCache(cacheKey, data, ttl); // შევინახოთ კეშში
            return data;
        } else {
            // დავალაგოთ შექმნის თარიღის მიხედვით კლებადობით და შევზღუდოთ 3 ბლოგით
            const { data, error } = await query.order("created_at", {
                ascending: false
            }).limit(3);
            if (error) throw error;
            setCache(cacheKey, data, ttl); // შევინახოთ კეშში
            return data;
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
}
function clearBlogsCache() {
    Object.keys(cache.data).forEach((key)=>{
        if (key.includes("blog")) {
            delete cache.data[key];
            delete cache.expiryTimes[key];
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Blog.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Blog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Headline.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$SeeAllButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/SeeAllButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiBlogs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiBlogs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// BlogLoader კომპონენტი, რომელიც ხელახლა ავრცელებს spinner-ს მხოლოდ ბლოგის კონტეინერში
function BlogLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-white flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        }, void 0, false, {
            fileName: "[project]/app/_components/Blog.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Blog.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = BlogLoader;
function Blog() {
    _s();
    const [blog, setBlog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Blog.useEffect": ()=>{
            async function fetchBlog() {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiBlogs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogsLimited"])();
                setBlog(data);
                setIsLoading(false);
            }
            fetchBlog();
        }
    }["Blog.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative mt-12 sm:mt-16 md:mt-20 lg:mt-[72px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                text: "ბლოგი"
            }, void 0, false, {
                fileName: "[project]/app/_components/Blog.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto max-sm:max-w-[95%] mt-8 sm:mt-10 md:mt-[36px] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogLoader, {}, void 0, false, {
                        fileName: "[project]/app/_components/Blog.jsx",
                        lineNumber: 36,
                        columnNumber: 23
                    }, this),
                    !isLoading && blog.map((singleBlog, blogIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white blog-shadow py-4 h-[556px] px-5 relative cursor-pointer  rounded-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "w-full rounded-[12px] h-[250px] xl:h-[284px] object-cover",
                                    src: singleBlog.image,
                                    alt: "blog-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Blog.jsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-4 sm:py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "caps-text text-[#282525] font-bold text-base",
                                            children: singleBlog.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Blog.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-[1.65] font-regular mt-3 sm:mt-4  text-secondary-500",
                                            children: singleBlog.text.split(" ").slice(0, 15).join(" ") + "..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Blog.jsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex relative mt-[36px] mb-[72px]  justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `blog/${singleBlog.id}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full pt-3 sm:w-[152px] text-sm rounded-[12px] h-[48px]",
                                                    children: "გაიგე მეტი"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Blog.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/_components/Blog.jsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Blog.jsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Blog.jsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, blogIndex, true, {
                            fileName: "[project]/app/_components/Blog.jsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/Blog.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-sm:w-[85%]",
                    href: `/blog`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$SeeAllButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        buttonText: "ყველას ნახვა"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/Blog.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/Blog.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Blog.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/Blog.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Blog, "6bte2QXZJPJ2jiKvnASs0voujTA=");
_c1 = Blog;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogLoader");
__turbopack_context__.k.register(_c1, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/arrowRight.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrowRight.8730f875.svg");}}),
"[project]/public/arrowRight.svg.mjs { IMAGE => \"[project]/public/arrowRight.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/arrowRight.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/CourseItem.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CourseItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/arrowRight.svg.mjs { IMAGE => "[project]/public/arrowRight.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiCourses.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CourseItem() {
    _s();
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourseItem.useEffect": ()=>{
            async function fetchBlogs() {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLimitedCourse"])();
                setCourses(data);
            }
            fetchBlogs();
        }
    }["CourseItem.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mt-8 md:mt-12 mb-5",
        children: courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `courses/${course.id}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white group relative card-shadow-inner duration-500 transition-all rounded-[16px] flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full pt-[65%] overflow-hidden rounded-t-[16px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "object-cover absolute top-0 left-0 w-full h-full rounded-tl-[16px] rounded-tr-[16px]",
                                src: course.image,
                                alt: `course-image-${course.id}`
                            }, void 0, false, {
                                fileName: "[project]/app/_components/CourseItem.jsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/CourseItem.jsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 md:p-4 flex flex-col flex-grow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base mt-2 font-bold text-secondary-500 caps-text line-clamp-2",
                                    children: course.title
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/CourseItem.jsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 md:mt-2  text-secondary-500 font-regular text-xs md:text-sm mb-3 md:mb-5",
                                    children: [
                                        "ტრენერი: ",
                                        course.lecturer
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/CourseItem.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-secondary-500 text-base md:text-lg",
                                                            children: [
                                                                course.price,
                                                                " ₾"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/_components/CourseItem.jsx",
                                                            lineNumber: 42,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 line-through text-xs md:text-sm text-[#838383] font-bold",
                                                            children: [
                                                                course.oldprice,
                                                                " ₾"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/_components/CourseItem.jsx",
                                                            lineNumber: 45,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/_components/CourseItem.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-primary-500 group-hover:bg-primary-600 duration-300 transition-all rounded-full absolute right-[10px] bottom-[10px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "w-[40px] p-1",
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                        alt: "arrowRight svg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/_components/CourseItem.jsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/CourseItem.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/CourseItem.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        course.showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "caps-text text-[10px] md:text-[12px] h-[26px] md:h-[32px] max-sm:text-[11px] w-[110px] md:w-[124px] font-medium",
                                            children: "რეგისტრაცია"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/CourseItem.jsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/CourseItem.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/CourseItem.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/CourseItem.jsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, course.id, false, {
                fileName: "[project]/app/_components/CourseItem.jsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/_components/CourseItem.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(CourseItem, "Ks3haE1eP87BHv/TJ29co0rtnQM=");
_c = CourseItem;
var _c;
__turbopack_context__.k.register(_c, "CourseItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Courses.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Courses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Headline.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$SeeAllButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/SeeAllButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$CourseItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/CourseItem.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Loader Component
function CoursesLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative z-50 bg-white w-full h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute spinner top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        }, void 0, false, {
            fileName: "[project]/app/_components/Courses.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Courses.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = CoursesLoader;
function Courses() {
    _s();
    // გამოიყენება loading state-ის მანეჯმენტისთვის
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // useEffect სიმულირებს მონაცემების ჩატვირთვას
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Courses.useEffect": ()=>{
            // მაგალითად, 2 წამში ჩატვირთვის დასრულება
            const timer = setTimeout({
                "Courses.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Courses.useEffect.timer"]);
            return ({
                "Courses.useEffect": ()=>clearTimeout(timer)
            })["Courses.useEffect"];
        }
    }["Courses.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container pt-[72px] relative max-sm:max-w-[95%] mx-auto pb-8 max-md:py-9 md:pb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[20px] max-sm:text-[19px] text-center leading-[24px] mt-[72px] caps-text font-bold text-secondary-500",
                children: "აირჩიე სასურველი კურსი და დარეგისტრირდი"
            }, void 0, false, {
                fileName: "[project]/app/_components/Courses.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoursesLoader, {}, void 0, false, {
                fileName: "[project]/app/_components/Courses.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$CourseItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/_components/Courses.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "max-sm:w-full",
                            href: "/courses",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$SeeAllButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                buttonText: "ყველას ნახვა"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Courses.jsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Courses.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/Courses.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/Courses.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Courses, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c1 = Courses;
var _c, _c1;
__turbopack_context__.k.register(_c, "CoursesLoader");
__turbopack_context__.k.register(_c1, "Courses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/quote.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/quote.1985088b.svg");}}),
"[project]/public/quote.svg.mjs { IMAGE => \"[project]/public/quote.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/quote.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Feedback.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Feedback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/arrowRight.svg.mjs { IMAGE => "[project]/public/arrowRight.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/quote.svg.mjs { IMAGE => "[project]/public/quote.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Initialize Supabase client (you'll need to add your env variables)
const supabaseUrl = ("TURBOPACK compile-time value", "https://ogxvbjvwbrllggcmfyke.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
function Feedback() {
    _s();
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupedTestimonials, setGroupedTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentX, setCurrentX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Feedback.useEffect": ()=>{
            const fetchReviews = {
                "Feedback.useEffect.fetchReviews": async ()=>{
                    setIsLoading(true);
                    const { data, error } = await supabase.from("review").select("*");
                    if (error) {
                        console.error("Error fetching reviews:", error);
                        setIsLoading(false);
                        return;
                    }
                    if (data && data.length > 0) {
                        setTestimonials(data);
                        // Group testimonials into arrays of 3 for desktop view
                        const grouped = [];
                        for(let i = 0; i < data.length; i += 3){
                            grouped.push(data.slice(i, i + 3));
                        }
                        setGroupedTestimonials(grouped);
                    }
                    setIsLoading(false);
                }
            }["Feedback.useEffect.fetchReviews"];
            fetchReviews();
        }
    }["Feedback.useEffect"], []);
    const handleSlideChange = (index)=>{
        if (isAnimating || index === activeSlide) return;
        setIsAnimating(true);
        setActiveSlide(index);
        setTimeout(()=>{
            setIsAnimating(false);
        }, 500);
    };
    const handleDragStart = (e)=>{
        if (isAnimating) return;
        const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
        setIsDragging(true);
        setStartX(clientX);
        setCurrentX(clientX);
        document.body.style.cursor = "grabbing";
        if (sliderRef.current) {
            sliderRef.current.style.cursor = "grabbing";
            sliderRef.current.style.userSelect = "none";
        }
    };
    const handleDragMove = (e)=>{
        if (!isDragging) return;
        const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
        setCurrentX(clientX);
    };
    const handleDragEnd = ()=>{
        if (!isDragging) return;
        document.body.style.cursor = "";
        if (sliderRef.current) {
            sliderRef.current.style.cursor = "grab";
            sliderRef.current.style.userSelect = "";
        }
        const diff = startX - currentX;
        const threshold = 50;
        if (diff > threshold && activeSlide < groupedTestimonials.length - 1) {
            handleSlideChange(activeSlide + 1);
        } else if (diff < -threshold && activeSlide > 0) {
            handleSlideChange(activeSlide - 1);
        }
        setIsDragging(false);
    };
    const handleMouseLeave = ()=>{
        if (isDragging) {
            setIsDragging(false);
            document.body.style.cursor = "";
            if (sliderRef.current) {
                sliderRef.current.style.cursor = "grab";
                sliderRef.current.style.userSelect = "";
            }
        }
    };
    // Render a single testimonial card
    const renderTestimonialCard = (testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white min-h-[308px] relative rounded-[14px] p-8 feeback-shadow duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 pt-4 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[-44px] left-0",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "w-[24px] h-[24px] object-contain",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$quote$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$quote$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                                alt: "quote",
                                width: 24,
                                height: 21
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Feedback.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[24px] h-[24px]"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Feedback.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#7B7D7E] font-normal text-sm leading-relaxed",
                            children: testimonial.text
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 129,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 115,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mr-4",
                                    children: testimonial.student_picture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "w-16 h-16 object-cover rounded-full",
                                        src: testimonial.student_picture,
                                        alt: `${testimonial.fullName} portrait`
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this) : // Fallback avatar if no image is provided
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-primary-100 flex items-center justify-center text-primary-500 font-bold text-xl rounded-full",
                                        children: testimonial.fullName?.charAt(0) || "U"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Feedback.jsx",
                                    lineNumber: 135,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold mb-[-6px] caps-text text-secondary-500 text-sm",
                                            children: testimonial.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Feedback.jsx",
                                            lineNumber: 150,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#706A6A] regular-text text-[13px]",
                                            children: testimonial.course
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Feedback.jsx",
                                            lineNumber: 154,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Feedback.jsx",
                                    lineNumber: 149,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[1px] bg-[#eeeeee] mt-6 my-5"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 159,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center cursor-pointer group mt-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mr-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "bg-primary-500 transition-colors duration-300 hover:bg-primary-600 rounded-full max-md:w-[30px] max-sm:w-[45px] w-[32px] p-1",
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                                        alt: "arrow right",
                                        width: 30,
                                        height: 30
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-primary-500 transition-colors duration-300 hover:bg-primary-600 rounded-full max-md:w-[30px] max-sm:w-[45px] w-[32px] h-[32px] p-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Feedback.jsx",
                                    lineNumber: 161,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: testimonial.courseLink || "#",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary-500 mt-[6px] caps-text font-bold leading-5 group-hover:text-primary-600 transition-colors duration-300",
                                        children: testimonial.course
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Feedback.jsx",
                                    lineNumber: 174,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 160,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this)
            ]
        }, testimonial.id, true, {
            fileName: "[project]/app/_components/Feedback.jsx",
            lineNumber: 111,
            columnNumber: 5
        }, this);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 px-4 mt-9 shadow-review bg-gray-50 overflow-x-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading testimonials..."
                }, void 0, false, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Feedback.jsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/Feedback.jsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    if (testimonials.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 px-4 mt-9 shadow-review bg-gray-50 overflow-x-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No testimonials available at the moment."
                }, void 0, false, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Feedback.jsx",
                lineNumber: 197,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/Feedback.jsx",
            lineNumber: 196,
            columnNumber: 7
        }, this);
    }
    return(// Outer section prevents overall horizontal scroll on the screen
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 mt-9 shadow-review bg-gray-50 overflow-x-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block select-none",
                    ref: sliderRef,
                    onMouseDown: handleDragStart,
                    onMouseMove: handleDragMove,
                    onMouseUp: handleDragEnd,
                    onMouseLeave: handleMouseLeave,
                    onTouchStart: handleDragStart,
                    onTouchMove: handleDragMove,
                    onTouchEnd: handleDragEnd,
                    style: {
                        cursor: "grab"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-x-visible",
                        children: [
                            groupedTestimonials.map((slideGroup, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute w-full transition-all duration-500 ease-in-out grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${activeSlide === slideIndex ? "opacity-100 translate-x-0" : activeSlide > slideIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`,
                                    style: {
                                        zIndex: activeSlide === slideIndex ? 10 : 1
                                    },
                                    children: slideGroup.map((testimonial)=>renderTestimonialCard(testimonial))
                                }, slideIndex, false, {
                                    fileName: "[project]/app/_components/Feedback.jsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)),
                            groupedTestimonials.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invisible md:grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: groupedTestimonials[0].map((testimonial)=>renderTestimonialCard(testimonial))
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Feedback.jsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/Feedback.jsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden select-none",
                    ref: sliderRef,
                    onTouchStart: handleDragStart,
                    onTouchMove: handleDragMove,
                    onTouchEnd: handleDragEnd,
                    style: {
                        cursor: "grab"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-visible",
                        children: groupedTestimonials.map((slideGroup, slideIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-500 ease-in-out ${activeSlide === slideIndex ? "opacity-100 block" : "opacity-0 hidden"}`,
                                children: slideGroup.map((testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full mb-6",
                                        children: renderTestimonialCard(testimonial)
                                    }, testimonial.id, false, {
                                        fileName: "[project]/app/_components/Feedback.jsx",
                                        lineNumber: 272,
                                        columnNumber: 19
                                    }, this))
                            }, slideIndex, false, {
                                fileName: "[project]/app/_components/Feedback.jsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/_components/Feedback.jsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center mt-[40px] space-x-4",
                    children: groupedTestimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleSlideChange(index),
                            className: `w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSlide === index ? "bg-primary-orange" : "border-2 border-primary-orange"}`
                        }, index, false, {
                            fileName: "[project]/app/_components/Feedback.jsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/_components/Feedback.jsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/Feedback.jsx",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Feedback.jsx",
        lineNumber: 206,
        columnNumber: 5
    }, this));
}
_s(Feedback, "szEBpWz6es8OCtAZ2pq68JNTna4=");
_c = Feedback;
var _c;
__turbopack_context__.k.register(_c, "Feedback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/sliderBg.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/sliderBg.e5e5ca8e.webp");}}),
"[project]/public/sliderBg.webp.mjs { IMAGE => \"[project]/public/sliderBg.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$sliderBg$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/sliderBg.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$sliderBg$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1392,
    height: 555,
    blurDataURL: "data:image/webp;base64,UklGRsEAAABXRUJQVlA4TLUAAAAvB4AAEM1VICICHgg4CgAAAICzFsoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/BgAA4IEAmwAAAACcvznhOGkAHAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIQIJbHggwDQAAAMD5BwQ4oZ8gcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHB3kEVPpKSSSMuyPzxpcQ5+UTU0aEnTm58uvBug4Dhr3zm3Yd7jXO8DAA==",
    blurWidth: 8,
    blurHeight: 3
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/rightSlider.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/rightSlider.a4cdaa7d.svg");}}),
"[project]/public/rightSlider.svg.mjs { IMAGE => \"[project]/public/rightSlider.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightSlider$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/rightSlider.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightSlider$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/leftSlider.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/leftSlider.2a298bf1.svg");}}),
"[project]/public/leftSlider.svg.mjs { IMAGE => \"[project]/public/leftSlider.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$leftSlider$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/leftSlider.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$leftSlider$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$arrowRight$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$arrowRight$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/arrowRight.svg.mjs { IMAGE => "[project]/public/arrowRight.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$sliderBg$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$sliderBg$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/sliderBg.webp.mjs { IMAGE => "[project]/public/sliderBg.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightSlider$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$rightSlider$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/rightSlider.svg.mjs { IMAGE => "[project]/public/rightSlider.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$leftSlider$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$leftSlider$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/leftSlider.svg.mjs { IMAGE => "[project]/public/leftSlider.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
// Supabase configuration
const supabaseUrl = ("TURBOPACK compile-time value", "https://ogxvbjvwbrllggcmfyke.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
// Simple in-memory cache
const cache = {
    data: {},
    timeouts: {},
    // Cache duration in milliseconds (1 hour)
    DEFAULT_TTL: 3600000,
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
function Hero() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [endX, setEndX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch data from Supabase with caching
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let isMounted = true;
            const cacheKey = "hero_slider_data";
            const fetchSlides = {
                "Hero.useEffect.fetchSlides": async ()=>{
                    try {
                        // Check cache first
                        if (cache.has(cacheKey)) {
                            const cachedData = cache.get(cacheKey);
                            if (isMounted) {
                                setSlides(cachedData);
                                setLoading(false);
                                return;
                            }
                        }
                        // If not in cache, fetch from Supabase
                        const { data, error } = await supabase.from("slider").select("*").order("created_at", {
                            ascending: false
                        });
                        if (error) throw error;
                        if (isMounted && data) {
                            // Prepare data for rendering
                            const formattedSlides = data.map({
                                "Hero.useEffect.fetchSlides.formattedSlides": (item)=>({
                                        image: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$sliderBg$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$sliderBg$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        imageRight: item.image,
                                        title: item.title,
                                        description: item.text,
                                        buttonLink: item.button_link || "#"
                                    })
                            }["Hero.useEffect.fetchSlides.formattedSlides"]);
                            // Store in cache and set state
                            cache.set(cacheKey, formattedSlides);
                            setSlides(formattedSlides);
                            setLoading(false);
                        }
                    } catch (err) {
                        if (isMounted) {
                            console.error("Error fetching slider data:", err);
                            setError(err);
                            setLoading(false);
                        }
                    }
                }
            }["Hero.useEffect.fetchSlides"];
            fetchSlides();
            // Cleanup function to prevent memory leaks
            return ({
                "Hero.useEffect": ()=>{
                    isMounted = false;
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Check for mobile screen - client-side only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            // Avoid window reference during SSR
            if ("TURBOPACK compile-time truthy", 1) {
                const checkScreenSize = {
                    "Hero.useEffect.checkScreenSize": ()=>{
                        setIsMobile(window.innerWidth < 1024);
                    }
                }["Hero.useEffect.checkScreenSize"];
                checkScreenSize();
                window.addEventListener("resize", checkScreenSize);
                return ({
                    "Hero.useEffect": ()=>window.removeEventListener("resize", checkScreenSize)
                })["Hero.useEffect"];
            }
        }
    }["Hero.useEffect"], []);
    // Memoized slider navigation functions
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[nextSlide]": ()=>({
                "Hero.useMemo[nextSlide]": ()=>{
                    if (slides.length > 0) {
                        setCurrentSlide({
                            "Hero.useMemo[nextSlide]": (prev)=>(prev + 1) % slides.length
                        }["Hero.useMemo[nextSlide]"]);
                    }
                }
            })["Hero.useMemo[nextSlide]"]
    }["Hero.useMemo[nextSlide]"], [
        slides.length
    ]);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[prevSlide]": ()=>({
                "Hero.useMemo[prevSlide]": ()=>{
                    if (slides.length > 0) {
                        setCurrentSlide({
                            "Hero.useMemo[prevSlide]": (prev)=>(prev - 1 + slides.length) % slides.length
                        }["Hero.useMemo[prevSlide]"]);
                    }
                }
            })["Hero.useMemo[prevSlide]"]
    }["Hero.useMemo[prevSlide]"], [
        slides.length
    ]);
    const handleDotClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[handleDotClick]": ()=>({
                "Hero.useMemo[handleDotClick]": (index)=>{
                    setCurrentSlide(index);
                }
            })["Hero.useMemo[handleDotClick]"]
    }["Hero.useMemo[handleDotClick]"], []);
    const handleSwipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[handleSwipe]": ()=>({
                "Hero.useMemo[handleSwipe]": ()=>{
                    const diff = startX - endX;
                    if (diff > 50) {
                        nextSlide();
                    } else if (diff < -50) {
                        prevSlide();
                    }
                    setStartX(0);
                    setEndX(0);
                }
            })["Hero.useMemo[handleSwipe]"]
    }["Hero.useMemo[handleSwipe]"], [
        startX,
        endX,
        nextSlide,
        prevSlide
    ]);
    // Auto-slider
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (slides.length === 0) return;
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    nextSlide();
                }
            }["Hero.useEffect.interval"], 9000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        slides.length,
        nextSlide
    ]);
    // Memoized touch events
    const touchEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Hero.useMemo[touchEvents]": ()=>{
            if (!isMobile) return {};
            return {
                onTouchStart: ({
                    "Hero.useMemo[touchEvents]": (e)=>setStartX(e.touches[0].clientX)
                })["Hero.useMemo[touchEvents]"],
                onTouchMove: ({
                    "Hero.useMemo[touchEvents]": (e)=>setEndX(e.touches[0].clientX)
                })["Hero.useMemo[touchEvents]"],
                onTouchEnd: handleSwipe,
                onMouseDown: ({
                    "Hero.useMemo[touchEvents]": (e)=>setStartX(e.clientX)
                })["Hero.useMemo[touchEvents]"],
                onMouseMove: ({
                    "Hero.useMemo[touchEvents]": (e)=>setEndX(e.clientX)
                })["Hero.useMemo[touchEvents]"],
                onMouseUp: handleSwipe
            };
        }
    }["Hero.useMemo[touchEvents]"], [
        isMobile,
        handleSwipe
    ]);
    // Show loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Hero.jsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/Hero.jsx",
            lineNumber: 214,
            columnNumber: 7
        }, this);
    }
    // Show error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "caps-text text-red-500",
                    children: "დაფიქსირდა შეცდომა!"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Hero.jsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/Hero.jsx",
            lineNumber: 225,
            columnNumber: 7
        }, this);
    }
    // Show when no slides are available
    if (slides.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "caps-text",
                    children: "არ არის კონტენტი!"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Hero.jsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 237,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/Hero.jsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative max-lg:bg-secondary-50 max-lg:rounded-[20px] max-lg:px-5 max-lg:py-10 max-sm:py-5 max-lg:max-w-[95%] container mt-[128px]",
        children: [
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$sliderBg$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$sliderBg$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Background",
                    sizes: "100vw",
                    style: {
                        objectFit: "cover"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/_components/Hero.jsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 248,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                ...touchEvents,
                children: [
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevSlide,
                                className: "absolute max-xl:left-4 left-7 top-[55%] -translate-y-1/2 z-10 bg-[#EFF2F580] hover:bg-white/80 rounded-full transition-all duration-300",
                                "aria-label": "Previous slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "max-xl:w-[36px] max-xl:h-[36px]",
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$leftSlider$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$leftSlider$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "left-slider",
                                    width: 48,
                                    height: 48
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Hero.jsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Hero.jsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextSlide,
                                className: "absolute right-7 max-xl:right-4 top-[55%] -translate-y-1/2 z-10 bg-[#EFF2F580] hover:bg-white/80 rounded-full transition-all duration-300",
                                "aria-label": "Next slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "max-xl:w-[36px] max-xl:h-[36px]",
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$rightSlider$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$rightSlider$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "right-slider",
                                    width: 48,
                                    height: 48
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Hero.jsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Hero.jsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-500 ease-in-out",
                        style: {
                            transform: `translateX(-${currentSlide * 100}%)`
                        },
                        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid max-xl:pt-[50px] pt-[85px] max-sm:pt-[50px] md:px-[70px] xl:px-[100px] grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[32px] xl:gap-[64px] justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "left order-2 text-secondary-800 lg:text-white max-sm:ml-2 lg:order-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl sm:text-[30px] md:text-[32px] lg:text-[30px] xl:text-[39px] max-sm:mt-6 max-lg:mt-9 max-sm:mb-[10px] max-sm:text-[22px] mb-[24px] caps-text font-bold",
                                                    children: slide.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Hero.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base md:text-lg lg:text-[15px] xl:text-[18px] font-regular leading-[1.5] sm:leading-[1.6] md:leading-[1.7] max-w-full sm:max-w-[95%] md:max-w-[90%] mt-2",
                                                    children: slide.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Hero.jsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "caps-text max-sm:mb-5 md:h-[48px] max-xl:h-[45px] px-7 max-sm:mt-8 flex items-center gap-3 sm:gap-2 pt-3 h-[48px] mt-4 sm:mt-6 md:mt-8 lg:mt-9 text-sm sm:text-[15px]",
                                                    onClick: ()=>window.location.href = slide.buttonLink || "#",
                                                    children: [
                                                        "გაიგე მეტი",
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/_components/Hero.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Hero.jsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-1 lg:order-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-none mx-auto lg:mx-0 overflow-hidden rounded-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: slide.imageRight,
                                                    alt: "slider-image",
                                                    width: 582,
                                                    height: 425,
                                                    className: "w-full mx-auto h-auto object-cover rounded-md max-sm:mt-4",
                                                    loading: index === 0 ? "eager" : "lazy",
                                                    sizes: "(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 582px"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Hero.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/_components/Hero.jsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Hero.jsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Hero.jsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/_components/Hero.jsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/_components/Hero.jsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute duration-300 transition-all max-lg:bottom-[-5%] bottom-[-20px] left-0 right-0 flex justify-center gap-4 z-10",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDotClick(index),
                        className: `w-[11px] h-[11px] rounded-full cursor-pointer ${currentSlide === index ? "bg-[#fdb927]" : "border-2 border-[#fdb927]"}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/app/_components/Hero.jsx",
                        lineNumber: 342,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/_components/Hero.jsx",
                lineNumber: 340,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/Hero.jsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(Hero, "b7PbDs0foIM1y6IOpn9eU1aWSyU=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/thumbnail1.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/thumbnail1.55e053d3.webp");}}),
"[project]/public/thumbnail1.webp.mjs { IMAGE => \"[project]/public/thumbnail1.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$thumbnail1$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/thumbnail1.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$thumbnail1$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 4936,
    height: 3291,
    blurDataURL: "data:image/webp;base64,UklGRuMAAABXRUJQVlA4TNcAAAAvBwABAM1VICICHgiACQMAAABBIAAIhDsAAAACAAAAAAAAHAAAAAAAAMAhAADhwDkJHGBdG1ufAQAAgAcCcAIBAABw/rul/QgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUOjTtuWBANMAAAAAnP/a9Io7DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiAq8hjHT4vtw39B9O166z2g0RLuB7ypnbL4FU82g34h8Qtkt2jRr7JNH0brgQqAJkZxOQnEICf2desbcBwraTyOIYHAAA=",
    blurWidth: 8,
    blurHeight: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/certificate.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/certificate.26fdab45.svg");}}),
"[project]/public/certificate.svg.mjs { IMAGE => \"[project]/public/certificate.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$certificate$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/certificate.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$certificate$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/lessonsIcon.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/lessonsIcon.4a403254.svg");}}),
"[project]/public/lessonsIcon.svg.mjs { IMAGE => \"[project]/public/lessonsIcon.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lessonsIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/lessonsIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lessonsIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/intern.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/intern.c6dd96d3.svg");}}),
"[project]/public/intern.svg.mjs { IMAGE => \"[project]/public/intern.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$intern$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/intern.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$intern$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/users.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/users.712a9b45.svg");}}),
"[project]/public/users.svg.mjs { IMAGE => \"[project]/public/users.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$users$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/users.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$users$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 48,
    height: 48,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/playButton.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/playButton.39fbabdf.svg");}}),
"[project]/public/playButton.svg.mjs { IMAGE => \"[project]/public/playButton.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$playButton$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/playButton.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$playButton$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 63,
    height: 63,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Information.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Information)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$thumbnail1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$thumbnail1$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/thumbnail1.webp.mjs { IMAGE => "[project]/public/thumbnail1.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$certificate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$certificate$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/certificate.svg.mjs { IMAGE => "[project]/public/certificate.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lessonsIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$lessonsIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/lessonsIcon.svg.mjs { IMAGE => "[project]/public/lessonsIcon.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$intern$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$intern$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/intern.svg.mjs { IMAGE => "[project]/public/intern.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$users$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$users$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/users.svg.mjs { IMAGE => "[project]/public/users.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$playButton$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$playButton$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/playButton.svg.mjs { IMAGE => "[project]/public/playButton.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
;
;
;
;
function Information() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white mt-8 sm:mt-12 md:mt-16 lg:mt-[64px] py-8 sm:py-12 md:py-16 lg:py-[64px] mb-12 sm:mb-16 md:mb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-4 sm:px-6 md:px-8 lg:px-0 gap-6 sm:gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center lg:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full relative sm:max-w-md md:max-w-xl lg:max-w-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$thumbnail1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$thumbnail1$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "information-image",
                                className: "w-full relative rounded-[16px] h-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Information.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$playButton$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$playButton$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "play-button"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Information.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/Information.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/Information.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 lg:mt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mb-8 md:mb-10 lg:mb-[40px] font-bold text-secondary-500 max-w-full sm:max-w-[90%] 2xl:max-w-[100%] 2xl:mb-[60px] text-center  caps-text leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] my-4 sm:my-6 md:my-8 lg:my-6",
                            children: "რატომ უნდა ისწავლოთ იდეარუმის აკადემიაში"
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Information.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$certificate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$certificate$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "certificate-svg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]",
                                                    children: "სერთიფიკატი"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2",
                                                    children: "ყველა კურსდამთავრებულს გადაეცემა ორენოვანი სერთიფიკატი"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Information.jsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 xl:ml-1 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$lessonsIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$lessonsIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "lessons-icon-svg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]",
                                                    children: "ადგილზე სწავლება"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2",
                                                    children: "ლექციები მიმდინარეობს აუდიტორიულ სივრცეში"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Information.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex md:mt-6 gap-3 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$intern$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$intern$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "intern-icon-svg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]",
                                                    children: "სტაჟირება / დასაქმება"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2",
                                                    children: "წარმატებულ კურსდამთავრებულებს აქვთ შანსი დასაქმდნენ ჩვენთან - ციფრულ სააგენტო იდეარუმში"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Information.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex xl:ml-1 md:mt-6 gap-4 items-start bg-secondary-50 p-5 rounded-lg shadow-sm md:bg-transparent md:p-0 md:rounded-none md:shadow-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$users$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$users$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "users-svg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-[#434A53] caps-text mt-[6px] sm:mt-[10px] md:mt-[11px]",
                                                    children: "ჩვენი გუნდი"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[15px] text-[#434A53] sm:text-sm leading-[1.6] mt-2 sm:mt-2",
                                                    children: "წამყვან კომპანიებთან მუშაობის გამოცდილების მქონე ლექტორები"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Information.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Information.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Information.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/Information.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/Information.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/Information.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Information.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Information;
var _c;
__turbopack_context__.k.register(_c, "Information");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = ({ ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
_c = DialogPortal;
DialogPortal.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"].displayName;
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-[#2B2640D4] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this));
_c1 = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cross2Icon"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 46,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, this));
_c3 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this);
_c4 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this);
_c5 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, this));
_c7 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 102,
        columnNumber: 3
    }, this));
_c9 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "DialogPortal");
__turbopack_context__.k.register(_c1, "DialogOverlay");
__turbopack_context__.k.register(_c2, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DialogContent");
__turbopack_context__.k.register(_c4, "DialogHeader");
__turbopack_context__.k.register(_c5, "DialogFooter");
__turbopack_context__.k.register(_c6, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c7, "DialogTitle");
__turbopack_context__.k.register(_c8, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/whiteCancel.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/whiteCancel.f64669d0.svg");}}),
"[project]/public/whiteCancel.svg.mjs { IMAGE => \"[project]/public/whiteCancel.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whiteCancel$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/whiteCancel.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whiteCancel$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/services/apiLecturer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkLecturerTableSchema": (()=>checkLecturerTableSchema),
    "getAllLecturers": (()=>getAllLecturers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
"use client";
;
// Initialize Supabase client with debugging
const supabaseUrl = ("TURBOPACK compile-time value", "https://ogxvbjvwbrllggcmfyke.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9neHZianZ3YnJsbGdnY21meWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjA0MjAsImV4cCI6MjA2MDM5NjQyMH0.1jqzrG77QundfqVg98tvWbM1YUFsJcG0IycwzphwLEM");
// Log environment variables (redacted for security)
console.log("Supabase URL configured:", ("TURBOPACK compile-time truthy", 1) ? "Yes ✓" : ("TURBOPACK unreachable", undefined));
console.log("Supabase Key configured:", ("TURBOPACK compile-time truthy", 1) ? "Yes ✓" : ("TURBOPACK unreachable", undefined));
// Create Supabase client
let supabase;
try {
    supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
    console.log("Supabase client created successfully");
} catch (error) {
    console.error("Failed to create Supabase client:", error);
}
async function getAllLecturers() {
    console.log("getAllLecturers called");
    // Check if Supabase client is initialized
    if (!supabase) {
        console.error("Supabase client not initialized");
        return [];
    }
    try {
        console.log("Attempting to fetch lecturers from Supabase...");
        // First check if the table exists by trying to count rows
        const { count, error: countError } = await supabase.from("lecturers").select("*", {
            count: "exact",
            head: true
        });
        if (countError) {
            console.error("Error checking lecturer table:", countError);
            // Check if the error is about the table not existing
            if (countError.message.includes("does not exist")) {
                console.error("The 'lecturer' table does not exist in your database");
            }
            return [];
        }
        console.log(`Table exists. Count query returned: ${count} rows`);
        // Now fetch the actual data
        const { data, error } = await supabase.from("lecturers").select("*").order("id", {
            ascending: true
        });
        if (error) {
            console.error("Error fetching lecturers data:", error);
            return [];
        }
        console.log(`Successfully fetched ${data?.length || 0} lecturers:`, data);
        return data || [];
    } catch (error) {
        console.error("Unexpected error in getAllLecturers:", error);
        return [];
    }
}
async function checkLecturerTableSchema() {
    try {
        const { data, error } = await supabase.rpc("get_table_info", {
            table_name: "lecturers"
        });
        if (error) {
            console.error("Error checking table schema:", error);
            return null;
        }
        return data;
    } catch (error) {
        console.error("Error in checkLecturerTableSchema:", error);
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/InfiniteMovingCards.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "InfiniteMovingCards": (()=>InfiniteMovingCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whiteCancel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whiteCancel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/whiteCancel.svg.mjs { IMAGE => "[project]/public/whiteCancel.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Headline.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiLecturer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiLecturer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const InfiniteMovingCards = ({ direction = "left", speed = "fast", pauseOnHover = true, className })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lecturers, setLecturers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For carousel functionality
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollLeft, setScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Add mobile detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMovingCards.useEffect": ()=>{
            const checkMobile = {
                "InfiniteMovingCards.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["InfiniteMovingCards.useEffect.checkMobile"];
            // Initial check
            checkMobile();
            // Add event listener for window resize
            window.addEventListener("resize", checkMobile);
            // Cleanup
            return ({
                "InfiniteMovingCards.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["InfiniteMovingCards.useEffect"];
        }
    }["InfiniteMovingCards.useEffect"], []);
    // Calculate total number of pages based on 4 cards per view
    const getPageCount = ()=>{
        if (!lecturers.length) return 0;
        return Math.ceil(lecturers.length / 4);
    };
    // Fetch lecturers data from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMovingCards.useEffect": ()=>{
            async function fetchLecturers() {
                try {
                    setLoading(true);
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiLecturer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLecturers"])();
                    // Use all lecturers from Supabase without limiting to 5
                    setLecturers(data);
                    setLoading(false);
                } catch (err) {
                    console.error("Failed to fetch lecturers:", err);
                    setError("Failed to load lecturers");
                    setLoading(false);
                }
            }
            fetchLecturers();
        }
    }["InfiniteMovingCards.useEffect"], []);
    // Function to handle card click
    const handleCardClick = (item, e)=>{
        e.stopPropagation();
        setSelectedItem(item);
        setIsDialogOpen(true);
    };
    // Handle carousel navigation
    const goToSlide = (index)=>{
        setCurrentIndex(index);
        if (!isMobile && containerRef.current) {
            const slideWidth = containerRef.current.offsetWidth;
            containerRef.current.scrollTo({
                left: index * slideWidth,
                behavior: "smooth"
            });
        }
    };
    // Mouse and touch event handlers for manual sliding
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        document.body.style.cursor = "grabbing";
        if (containerRef.current) {
            containerRef.current.style.cursor = "grabbing";
            containerRef.current.style.userSelect = "none";
        }
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleMouseUp = ()=>{
        if (!isDragging) return;
        document.body.style.cursor = "";
        if (containerRef.current) {
            containerRef.current.style.cursor = "grab";
            containerRef.current.style.userSelect = "";
        }
        setIsDragging(false);
        if (!containerRef.current) return;
        // Determine which slide is most visible
        const slideWidth = containerRef.current.offsetWidth;
        const scrollPosition = containerRef.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / slideWidth);
        const pageCount = getPageCount();
        if (pageCount === 0) return;
        // Snap to the nearest slide
        setCurrentIndex(Math.max(0, Math.min(newIndex, pageCount - 1)));
        goToSlide(Math.max(0, Math.min(newIndex, pageCount - 1)));
    };
    const handleMouseLeave = ()=>{
        if (isDragging) {
            setIsDragging(false);
            document.body.style.cursor = "";
            if (containerRef.current) {
                containerRef.current.style.cursor = "grab";
                containerRef.current.style.userSelect = "";
            }
        }
    };
    const handleTouchStart = (e)=>{
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e)=>{
        setTouchEnd(e.targetTouches[0].clientX);
        if (containerRef.current) {
            const walk = (touchStart - e.targetTouches[0].clientX) * 2;
            containerRef.current.scrollLeft += walk / 10;
        }
    };
    const handleTouchEnd = ()=>{
        if (touchStart - touchEnd > 75) {
            // Swipe left
            const pageCount = getPageCount();
            if (pageCount === 0) return;
            const newIndex = Math.min(currentIndex + 1, pageCount - 1);
            goToSlide(newIndex);
        } else if (touchStart - touchEnd < -75) {
            // Swipe right
            const newIndex = Math.max(currentIndex - 1, 0);
            goToSlide(newIndex);
        } else {
            // Small movement, snap to current slide
            goToSlide(currentIndex);
        }
    };
    // Handle scroll event to update current index
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfiniteMovingCards.useEffect": ()=>{
            const handleScroll = {
                "InfiniteMovingCards.useEffect.handleScroll": ()=>{
                    if (!containerRef.current || isDragging) return;
                    const slideWidth = containerRef.current.offsetWidth;
                    const scrollPosition = containerRef.current.scrollLeft;
                    const newIndex = Math.round(scrollPosition / slideWidth);
                    const pageCount = getPageCount();
                    if (newIndex !== currentIndex && pageCount > 0) {
                        setCurrentIndex(Math.max(0, Math.min(newIndex, pageCount - 1)));
                    }
                }
            }["InfiniteMovingCards.useEffect.handleScroll"];
            const container = containerRef.current;
            if (container) {
                container.addEventListener("scroll", handleScroll);
            }
            return ({
                "InfiniteMovingCards.useEffect": ()=>{
                    if (container) {
                        container.removeEventListener("scroll", handleScroll);
                    }
                }
            })["InfiniteMovingCards.useEffect"];
        }
    }["InfiniteMovingCards.useEffect"], [
        currentIndex,
        isDragging
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative z-50 w-full h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute spinner top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            }, void 0, false, {
                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-red-500 p-8",
            children: error
        }, void 0, false, {
            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
            lineNumber: 217,
            columnNumber: 12
        }, this);
    }
    if (lecturers.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-8",
            children: "ვერ მოიძებნა ლექტორები"
        }, void 0, false, {
            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
            lineNumber: 221,
            columnNumber: 12
        }, this);
    }
    // Create groups of 4 cards for pagination
    const cardGroups = [];
    for(let i = 0; i < lecturers.length; i += 4){
        cardGroups.push(lecturers.slice(i, i + 4));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[35px] mt-[-50px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "ლექტორები"
                }, void 0, false, {
                    fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container max-sm:max-w-[95%] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-20 overflow-hidden rounded-[10px]", !isMobile && "scroll-smooth no-scrollbar flex snap-x snap-mandatory", className),
                        style: {
                            ...!isMobile && {
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                scrollSnapType: "x mandatory",
                                cursor: "grab",
                                overflowX: "hidden"
                            }
                        },
                        onMouseDown: !isMobile ? handleMouseDown : undefined,
                        onMouseMove: !isMobile ? handleMouseMove : undefined,
                        onMouseUp: !isMobile ? handleMouseUp : undefined,
                        onMouseLeave: !isMobile ? handleMouseLeave : undefined,
                        onTouchStart: !isMobile ? handleTouchStart : undefined,
                        onTouchMove: !isMobile ? handleTouchMove : undefined,
                        onTouchEnd: !isMobile ? handleTouchEnd : undefined,
                        children: cardGroups.map((group, groupIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `grid transition-opacity duration-300 ${isMobile ? currentIndex === groupIdx ? "opacity-100" : "opacity-0 hidden" : "min-w-full flex-shrink-0 grid snap-center"} grid-cols-1 md:grid-cols-2 lg:grid-cols-4`,
                                style: {
                                    gap: "16px",
                                    width: "100%",
                                    ...!isMobile && {
                                        flex: "0 0 100%",
                                        marginRight: groupIdx === 0 ? "32px" : "0"
                                    }
                                },
                                children: group.map((lecturer, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative justify-center text-center items-center flex h-[400px] rounded-[16px] shrink-0 bg-white duration-300 transition-all cursor-pointer",
                                        onClick: (e)=>handleCardClick(lecturer, e),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex group relative justify-center items-center w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: "w-full h-full rounded-[12px] object-cover",
                                                    src: lecturer.lecturer_image,
                                                    alt: "lecturer_image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#fff] group-hover:bg-[#8471D9E5] w-full h-[98px] rounded-bl-[12px] rounded-br-[12px] flex flex-col items-center text-center absolute bottom-0 group-hover:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-base text-[#282525] mt-[30px] text-center group-hover:text-white justify-center items-center caps-text font-bold",
                                                            children: lecturer.fullName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "regular-text text-sm group-hover:text-white text-[#434A53]",
                                                            children: lecturer.field
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                                            lineNumber: 296,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this)
                                    }, lecturer.fullName + idx, false, {
                                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this))
                            }, `group-${groupIdx}`, false, {
                                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-9 space-x-4",
                        children: cardGroups.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>goToSlide(idx),
                                className: `w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === idx ? "bg-primary-orange" : "border-2 border-primary-orange"}`
                            }, idx, false, {
                                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "text-secondary-500 max-h-[90vh] overflow-y-auto max-md:max-w-[95%] min-w-[800px] max-md:min-w-[300px] outline-none border-none bg-transparent shadow-none rounded-[30px] mx-auto max-md:mr-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        className: "max-sm:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex max-sm:text-left mb-5 sm:mb-7 items-center gap-2 max-sm:justify-start w-full"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex justify-center items-center w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>setIsDialogOpen(!isDialogOpen),
                                        className: "absolute cursor-pointer w-[36px] h-[36px] max-md:w-[28px] max-md:h-[28px] max-md:right-[3%] z-50 right-[2%] top-[4%]",
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whiteCancel$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whiteCancel$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "cancel-svg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        controls: true,
                                        muted: false,
                                        autoPlay: true,
                                        playsInline: true,
                                        className: "w-full border-none outline-none rounded-[20px] relative h-full max-sm:h-auto",
                                        onError: (e)=>{
                                            console.error("Video failed to load", e);
                                            setIsDialogOpen(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: selectedItem.lecturer_video,
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this),
                                            "Your browser does not support the video tag."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/InfiniteMovingCards.jsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(InfiniteMovingCards, "5u9z7Uzdl8kmfAePnlXfCHbnEfU=");
_c = InfiniteMovingCards;
var _c;
__turbopack_context__.k.register(_c, "InfiniteMovingCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/InfiniteMovingCardsDemo.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InfiniteMovingCardsDemo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$InfiniteMovingCards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/InfiniteMovingCards.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function InfiniteMovingCardsDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-auto py-8 flex flex-col antialiased   items-center justify-center relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$InfiniteMovingCards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteMovingCards"], {}, void 0, false, {
            fileName: "[project]/app/_components/InfiniteMovingCardsDemo.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/InfiniteMovingCardsDemo.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = InfiniteMovingCardsDemo;
var _c;
__turbopack_context__.k.register(_c, "InfiniteMovingCardsDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/brands.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/brands.95bd6de8.png");}}),
"[project]/public/brands.png.mjs { IMAGE => \"[project]/public/brands.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$brands$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/brands.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$brands$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 3477,
    height: 1033,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AGaHbTpoiG9AXYBjJ1d8XRxWe1wZVntcF2OEaTBdgGQiAGeHbjxfgWUsWX1fHl+BZSdjhWowZIVrNF2AYyNihGgt/RoXBNlqRnYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Brand.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Brand)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$brands$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$brands$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/brands.png.mjs { IMAGE => "[project]/public/brands.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Headline.jsx [app-client] (ecmascript)");
;
;
;
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-[50px] rounded-[16px] flex flex-col justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Headline$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "კომპანიები, რომლებთანაც ჩვენი ლექტორები თანამშრომლობენ"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Brand.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "mt-[30px] w-full",
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$brands$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$brands$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                    alt: "ბრენდები ფოტო"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Brand.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/Brand.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Brand.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Brand;
var _c;
__turbopack_context__.k.register(_c, "Brand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Blog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Blog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Courses$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Courses.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Feedback$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Feedback.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Information$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Information.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$InfiniteMovingCardsDemo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/InfiniteMovingCardsDemo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Brand$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_components/Brand.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Courses$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Information$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Blog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Feedback$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$InfiniteMovingCardsDemo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_components$2f$Brand$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_8926079a._.js.map