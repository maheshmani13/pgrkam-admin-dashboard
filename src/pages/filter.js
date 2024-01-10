import Layout from "../components/layout";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
export default function Filter() {
  const [length, setlength] = useState(0);
  const [udata, setdata] = useState([]);
  const [gender, setgender] = useState("");
  const [toggel, settoggel] = useState(false);
  const [ptoggel, setptoggel] = useState(false);
  const [highest_education, sethighest_education] = useState("");
  const [skills, setskills] = useState("");
  const [constituency, setconstituency] = useState("");
  async function handleSearch() {
    settoggel(false);
    setptoggel(true);
    const baseUrl = "https://pgrkam2.onrender.com/api/v1/applicant";
    const queryParams = {
      highest_education: highest_education,
      skills: "All",
      constituency: constituency,
      gender: gender,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = `${baseUrl}?${queryString}`;
    var res = await fetch(urlWithParams);
    res = await res.json();
    res = await res.data;
    setdata(res);
    console.log(res);
    setlength(res?.length || 0);
    settoggel(true);
  }

  return (
    <Layout>
      <div className="ml-48">
        <div className="m-2 max-w-screen-md">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
            <p className="mt-1 text-sm">Use filters to further refine search</p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label
                  htmlFor="highest_education"
                  className="text-stone-600 text-sm font-medium"
                >
                  Highest Education
                </label>

                <select
                  value={highest_education}
                  onChange={(e) => sethighest_education(e.target.value)}
                  id="highest_education"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="All">All</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="gender"
                  className="text-stone-600 text-sm font-medium"
                >
                  Gender
                </label>

                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                  id="gender"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>All</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="constituency"
                  className="text-stone-600 text-sm font-medium"
                >
                  Constituency
                </label>

                <select
                  value={constituency}
                  onChange={(e) => setconstituency(e.target.value)}
                  id="constituency"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="All">All</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Bathinda">Bathinda</option>
                  <option value="Jalandhar">Jalandhar</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Patiala">Patiala</option>
                  <option value="Mohali">Mohali</option>
                  <option value="Hoshiarpur">Hoshiarpur</option>
                  <option value="Pathankot">Pathankot</option>
                  <option value="Moga">Moga</option>
                  <option value="Firozpur">Firozpur</option>
                  <option value="Faridkot">Faridkot</option>
                  <option value="Batala">Batala</option>
                  <option value="Muktasar">Muktasar</option>
                  <option value="Sangrur">Sangrur</option>
                  <option value="Khanna">Khanna</option>
                  <option value="Gurdaspur">Gurdaspur</option>
                  <option value="Ropar">Ropar</option>
                  <option value="Abohar">Abohar</option>
                  <option value="Fazilka">Fazilka</option>
                  <option value="Kapurthala">Kapurthala</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="skills"
                  className="text-stone-600 text-sm font-medium"
                >
                  Skills
                </label>

                <select
                  value={skills}
                  onChange={(e) => setskills(e.target.value)}
                  id="skills"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="All">All</option>
                  <option value="Python programming">Python programming</option>
                  <option value="Data analysis">Data analysis</option>
                  <option value="Web development">Web development</option>
                  <option value="Project management">Project management</option>
                  <option value="Communication skills">
                    Communication skills
                  </option>
                  <option value="Problem-solving">Problem-solving</option>
                  <option value="Teamwork">Teamwork</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Time management">Time management</option>
                  <option value="Public speaking">Public speaking</option>
                  <option value="Machine learning">Machine learning</option>
                  <option value="Database management">
                    Database management
                  </option>
                  <option value="Customer service">Customer service</option>
                  <option value="Critical thinking">Critical thinking</option>
                  <option value="Agile methodology">Agile methodology</option>
                  <option value="Networking">Networking</option>
                  <option value="Graphic design">Graphic design</option>
                  <option value="Content writing">Content writing</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Research">Research</option>
                  <option value="Microsoft Office proficiency">
                    Microsoft Office proficiency
                  </option>
                  <option value="Analytical skills">Analytical skills</option>
                  <option value="Adaptability">Adaptability</option>
                  <option value="Attention to detail">
                    Attention to detail
                  </option>
                  <option value="Negotiation">Negotiation</option>
                  <option value="Creative thinking">Creative thinking</option>
                  <option value="Business analysis">Business analysis</option>
                  <option value="Presentation skills">
                    Presentation skills
                  </option>
                  <option value="Conflict resolution">
                    Conflict resolution
                  </option>
                  <option value="Java programming">Java programming</option>
                  <option value="C++ programming">C++ programming</option>
                  <option value="Mobile app development">
                    Mobile app development
                  </option>
                  <option value="Artificial intelligence">
                    Artificial intelligence
                  </option>
                  <option value="Cloud computing">Cloud computing</option>
                  <option value="Digital marketing">Digital marketing</option>
                  <option value="SEO optimization">SEO optimization</option>
                  <option value="UI/UX design">UI/UX design</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button
                onClick={handleSearch}
                className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {ptoggel && !toggel && (
          <div className="flex justify-center mr-44">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
            />
          </div>
        )}
        {toggel && (
          <div className="flex flex-col justify-center mr-44">
            <div className="text-xl py-3 border border-black  text-center bg-white w-56">
              Your query count is {length}
            </div>
            <div className="flex flex-col mt-5 border-black border gap-2 p-5">
              {udata.length &&
                udata.map((user) => (
                  <div key={user} className="text-black gap-10 flex">
                    <div className="w-64">{user.name}</div>
                    <div className="w-64">{user.email}</div>
                    <div className="w-32">{user.phone}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* {length != 0 && alert("your count is " + length)} */}
      </div>
    </Layout>
  );
}
