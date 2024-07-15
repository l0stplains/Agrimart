import React from 'react'
import { fetchSpreadsheetData } from '@/utils'

async function page() {
  const catalogData = await fetchSpreadsheetData();
  
  return (
    <div>
      <table>
              <tbody>
                {catalogData.map((item: any) => {
                  return (
                    <tr key={item["Kode Barang"]}>
                      <td>{item["Nama Barang"]}</td>
                      <td>{item["Jenis"]}</td>
                      <td>{item["Harga Jual"]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    </div>
  )
}

export default page