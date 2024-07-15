import React from "react";

const Navbar = ({ catalogData }: any) => {
  return (
    <header className="">
      <div className="">
        <div className="">
          <a href="/" className=""></a>
        </div>
        <div className="">
          <div className="">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
