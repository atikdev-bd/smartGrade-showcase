import studentImg from "../assets/avatar.png";
export default function StudentTable() {
  return (
    <div>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {/*class One*/}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                Class One
              </td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">1</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Mahi</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">98%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">2</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Shakib</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">94%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">3</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Minhaz</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">99%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">4</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">S. Mitu</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">98%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">5</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Ashik</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">92%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">6</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Robi Kumar</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A-</td>
              <td className="p-5 text-sm md:text-xl text-center">91%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">7</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Masuk</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">97%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">8</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Rabbil</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">95%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">9</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Akash</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A-</td>
              <td className="p-5 text-sm md:text-xl text-center">95%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">10</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Mr. Alim</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">97%</td>
            </tr>

            {/*class two*/}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                Class Two
              </td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">1</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Mizanur Rahman</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">98%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">2</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Shakib</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">94%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">3</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Minhaz</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">99%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">4</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">S. Mitu</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">98%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">5</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Rakib</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">92%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">6</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Anup Kurmar</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A-</td>
              <td className="p-5 text-sm md:text-xl text-center">91%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">7</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Milton</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">97%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">8</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Miraz</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A+</td>
              <td className="p-5 text-sm md:text-xl text-center">95%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">9</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">M. Abir</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A-</td>
              <td className="p-5 text-sm md:text-xl text-center">95%</td>
            </tr>
            <tr className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">10</td>
              <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={studentImg}
                    width="32"
                    height="32"
                    alt="John Smith"
                  />
                  <span className="whitespace-nowrap">Mr. Alim</span>
                </div>
              </td>
              <td className="p-5 text-sm md:text-xl text-center">A</td>
              <td className="p-5 text-sm md:text-xl text-center">97%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
