import { NextResponse } from "next/server";
import supabase, {
  executeWithTimeout,
  handleSupabaseError,
} from "../../services/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required" },
        { status: 400 }
      );
    }

    const operation = supabase
      .from("offered_course")
      .select("*")
      .eq("id", id)
      .single();

    const { data, error } = await executeWithTimeout(
      operation,
      10000,
      "Fetch single offer"
    );

    if (error) {
      const userError = handleSupabaseError(error, "Fetch single offer");
      return NextResponse.json({ error: userError.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json(
        { error: "კურსი ვერ მოიძებნა" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error in /api/offer:", error);
    return NextResponse.json(
      {
        error: error.message || "სერვერის შეცდომა - გთხოვთ სცადოთ მოგვიანებით",
      },
      { status: 500 }
    );
  }
}
