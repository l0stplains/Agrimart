import { ProductProps } from "@/types";

function parseCSV(csvText: string) {
  const rows = csvText.split(/\r?\n/); // Use a regular expression to split the CSV text into rows while handling '\r'
  const headers = rows[0].split(","); // Extract headers (assumes the first row is the header row)
  const data : ProductProps[] = []; // Initialize an array to store the parsed data
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(","); // Use the regular expression to split the row while handling '\r'
    const tempRowObject: { [key: string]: string } = {};
    for (let j = 0; j < headers.length; j++) {
      tempRowObject[headers[j]] = rowData[j];
    }
    const rowObject : ProductProps = {
      No: tempRowObject["No"],
      "Kode Barang": tempRowObject["Kode Barang"],
      "Nama Barang": tempRowObject["Nama Barang"],
      Jenis: tempRowObject["Jenis"],
      "Harga Jual": tempRowObject["Harga Jual"],
    };
    data.push(rowObject);
  }
  return data;
}

export async function fetchSpreadsheetData() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9uITa4h11a3xRp_vemEDoa80CeaXmE3oU4GfVNHu2tjAom6alUBnbo88E56L2xLlqAnJs5uuE8faH/pub?output=csv",
    { next: { revalidate: 3600 } }
  );
  const parsedData = parseCSV(await res.text());
  return parsedData;
}

export const appendData = async (date: string, productName: string, totalBill: string, paymentMethod: string) => {
  const response = await fetch('/api/confirm-transaction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date, productName, totalBill, paymentMethod }),
  });

  if (!response.ok) {
    throw new Error('Failed to append data');
  }

  const data = await response.json();
  return data;
};


export function rupiahToInt(rupiah: string) {
  return parseInt(rupiah.split(',')[0].replace(/\D/g, ""));
}

export function intToRupiah(int: number) {
  return "Rp " + int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
