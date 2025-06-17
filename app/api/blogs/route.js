import { NextResponse } from "next/server";
import supabase, {
  executeWithTimeout,
  handleSupabaseError,
} from "../../services/supabase";

export async function GET() {
  try {
    const operation = supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    const { data, error } = await executeWithTimeout(
      operation,
      10000,
      "Fetch blogs"
    );

    if (error) {
      const userError = handleSupabaseError(error, "Fetch blogs");
      return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    if (!data || !Array.isArray(data)) {
      return NextResponse.json(
        { error: "ბლოგები ვერ მოიძებნა" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error in /api/blogs:", error);
    return NextResponse.json(
      {
        error: error.message || "სერვერის შეცდომა - გთხოვთ სცადოთ მოგვიანებით",
      },
      { status: 500 }
    );
  }
}
