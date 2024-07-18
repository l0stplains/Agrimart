import { NextResponse } from "next/server";

import { google } from "googleapis";

async function authorize() {
  const {
    GOOGLE_PROJECT_ID,
    GOOGLE_PRIVATE_KEY_ID,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL,
  } = process.env;
  const glAuth = await google.auth.getClient({
    projectId: GOOGLE_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: GOOGLE_PROJECT_ID,
      private_key_id: GOOGLE_PRIVATE_KEY_ID,
      private_key: GOOGLE_PRIVATE_KEY,
      client_email: GOOGLE_CLIENT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return glAuth;
}

async function appendData(values: any[]) {
  const auth = await authorize();
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = "Form Responses 1";
  const resource = {
    values,
  };
  await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: resource,
  });
}

export async function POST(req: Request) {
  let body;
  try {
  body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
  const { date, productName, totalBill, paymentMethod } = body;
  if (!date || !productName || !totalBill || !paymentMethod) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const data = [date, productName, totalBill, paymentMethod];
    await appendData([data]);
    return NextResponse.json(
      { message: "Data appended successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
