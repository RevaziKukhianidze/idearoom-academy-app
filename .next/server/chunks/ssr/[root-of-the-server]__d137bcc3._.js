module.exports = {

"[project]/.next-internal/server/app/courses/[courseId]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/services/apiCourses.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCourseById": (()=>getCourseById),
    "getCourses": (()=>getCourses),
    "getLimitedCourse": (()=>getLimitedCourse),
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
async function getCourses(id) {
    const cacheKey = "all_courses";
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("courses").select("*");
    // Store in cache and return
    return cache.set(cacheKey, data);
}
async function getCourseById(id) {
    const cacheKey = `course_${id}`;
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("courses").select("*, syllabus_title, syllabus_content").eq("id", id).single();
    // Store in cache and return
    return cache.set(cacheKey, data);
}
async function getLimitedCourse() {
    const cacheKey = "limited_courses";
    // Check cache first
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    // If not in cache, fetch from Supabase
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].from("courses").select("*").order("id", {
        ascending: false
    }).limit(4);
    // Store in cache and return
    return cache.set(cacheKey, data);
}
function invalidateCache(id = null) {
    if (id) {
        // Invalidate specific course
        cache.invalidate(`course_${id}`);
    }
    // Always invalidate the collection caches
    cache.invalidate("all_courses");
    cache.invalidate("limited_courses");
}
}}),
"[project]/app/courses/[courseId]/_components/CourseClient.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/courses/[courseId]/_components/CourseClient.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/courses/[courseId]/_components/CourseClient.jsx <module evaluation>", "default");
}}),
"[project]/app/courses/[courseId]/_components/CourseClient.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/courses/[courseId]/_components/CourseClient.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/courses/[courseId]/_components/CourseClient.jsx", "default");
}}),
"[project]/app/courses/[courseId]/_components/CourseClient.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$courseId$5d2f$_components$2f$CourseClient$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/courses/[courseId]/_components/CourseClient.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$courseId$5d2f$_components$2f$CourseClient$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/courses/[courseId]/_components/CourseClient.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$courseId$5d2f$_components$2f$CourseClient$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/courses/[courseId]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CoursePage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/apiCourses.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$courseId$5d2f$_components$2f$CourseClient$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/courses/[courseId]/_components/CourseClient.jsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    const courseId = params.courseId;
    const course = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourseById"])(parseInt(courseId));
    if (!course) {
        return {
            title: "კურსი არ მოიძებნა !",
            description: "მოთხოვნილი კურსი ვერ მოიძებნა"
        };
    }
    return {
        title: course.title,
        description: Array.isArray(course.course_details) && course.course_details.length > 0 ? course.course_details[0] : "Course details",
        robots: {
            follow: true,
            index: true
        }
    };
}
async function CoursePage({ params, searchParams }) {
    const courseId = params.courseId;
    const activeTab = searchParams?.tab || "details";
    // Fetch course data
    const courseData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourseById"])(parseInt(courseId));
    // Get related courses
    const allCourses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourses"])();
    const relatedCourses = allCourses.filter((c)=>c.id !== parseInt(courseId)).slice(0, 4);
    // Process syllabus data
    const processData = (data)=>{
        if (Array.isArray(data)) return data;
        if (data == null) return [];
        if (typeof data === "string") {
            try {
                const trimmedData = data.trim();
                if (trimmedData.startsWith("[") && trimmedData.endsWith("]") || trimmedData.startsWith("{") && trimmedData.endsWith("}")) {
                    return JSON.parse(trimmedData);
                }
                return [
                    trimmedData
                ];
            } catch (e) {
                console.error("Failed to parse JSON:", e);
                return [];
            }
        }
        return [];
    };
    const validateSyllabusContent = (content)=>{
        if (!Array.isArray(content)) return [
            String(content)
        ];
        return content.map((item)=>String(item));
    };
    let syllabusItems = [];
    if (courseData) {
        const titles = processData(courseData.syllabus_title);
        const contents = processData(courseData.syllabus_content);
        if (Array.isArray(titles) && titles.length > 0) {
            syllabusItems = titles.map((title, index)=>{
                let contentArray = [];
                if (Array.isArray(contents) && contents.length > index) {
                    contentArray = validateSyllabusContent(contents[index]);
                }
                return {
                    title: `ლექცია ${index + 1}: ${title}`,
                    content: contentArray
                };
            });
        } else if (Array.isArray(contents) && contents.length > 0) {
            syllabusItems = contents.map((contentArray, index)=>({
                    title: `ლექცია ${index + 1}`,
                    content: validateSyllabusContent(contentArray)
                }));
        }
        if (syllabusItems.length === 0) {
            syllabusItems = [
                {
                    title: "ლექცია 1",
                    content: [
                        "შინაარსი 1",
                        "შინაარსი 2"
                    ]
                }
            ];
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f5b$courseId$5d2f$_components$2f$CourseClient$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        courseData: courseData,
        relatedCourses: relatedCourses,
        syllabusItems: syllabusItems,
        activeTab: activeTab,
        courseId: courseId
    }, void 0, false, {
        fileName: "[project]/app/courses/[courseId]/page.jsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
async function generateStaticParams() {
    try {
        const courses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$apiCourses$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCourses"])();
        return courses.map((course)=>({
                courseId: course.id.toString()
            }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}
}}),
"[project]/app/courses/[courseId]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/courses/[courseId]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d137bcc3._.js.map