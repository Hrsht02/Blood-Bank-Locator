import React, { useState } from "react";
import "./BloodBankSearch.css";

const bloodBankData = [
    { name: "Maa Blood Centre", address: "Bari Path, Dariyapur Gola, Bakarganj, Patna, Bihar 800004", hours: "Open 24 hours", phone: "7942685882", map: "https://maps.app.goo.gl/t4SoM1GmwUnZ1HYW6" },
    { name: "Red Cross Hospital", address: "South Gandhi Maidan, Patna ", hours: "Open 24 hours", phone: "7947137507", map: "" },
    { name: "Indian Red Cross Society, Patna City Branch", address: "Bihar State Branch, N Gandhi Maidan Rd, Kali Asthan, Patna, Bihar 800001", hours: "Open 24 hours", phone: "6122234869", map: "https://maps.app.goo.gl/8oHGwuk5DMW1ZCK18" },
    { name: "Modern Blood Bank", address: "Jai Prabha Hospital Campus, Kankarbagh, Patna - 800020", hours: "Open 24 hours", phone: "7942684181", map: "https://maps.app.goo.gl/epDfp23xdfRt4C6n8" },
    { name: "Bharat Blood Bank", address: "Jhaji Kothi, Kadamkuan, Patna - 800003 (Near Churi Market)", hours: "Open 24 hours", phone: "7947122047", map: "https://maps.app.goo.gl/NTD8AUKKnKbRm9Tr6" },
    { name: "Model Blood Bank", address: "JAI Prabha Hospital Campus, Kankarbagh, Patna - 800020", hours: "Open 24 hours", phone: "7947412556", map: "https://maps.app.goo.gl/VS7khjEp6szApfTaA" },
    { name: "PMCH Blood Bank", address: "Ashok Rajpath, Bankipur, Patna - 800004 (Near Jahaji Kothi)", hours: "Open 24 hours", phone: "7942686986", map: "https://maps.app.goo.gl/JZEpzJTghMcfVwon7" },
    { name: "Jeevan Rekha Blood Bank", address: "C/O Gatwel Hospital, Bailey Road Raja Bazar, Sheikhpura, Patna - 800014 (Near Pillar No 52)", hours: "Open 24 hours", phone: "794288070", map: "https://maps.app.goo.gl/dgjTdDDDps1RvXce7" },
    { name: "Prathama Blood Centre", address: "K S Complex, Cantt Road, Danapur Bazar, Patna - 801503 (Near Saguna More)", hours: "Open 24 hours", phone: "6115223311", map: "https://maps.app.goo.gl/PWWEo2N4tSfQdvEf8" },
    { name: "Niramayah Blood Bank", address: "No 03, Kankarbagh, Patna - 800020 (Near SBI, Jogipur, Kumhrar)", hours: "Open 24 hours", phone: "7947429226", map: "https://maps.app.goo.gl/aYjkvLhtpuB98AfRA" },
    { name: "Kurji Holy Family Blood Bank", address: "Kurji, Patna - 800001", hours: "Open 24 hours", phone: "7947421242", map: "https://maps.app.goo.gl/QEvXg5MuqZ7WYnU16" },
    { name: "Palm View Blood Bank", address: "Bailey Road, Sheikhpura, Patna - 800014 (Near Jagdev Path)", hours: "Open 24 hours", phone: "7947425320", map: "https://maps.app.goo.gl/8uqrVQjFdx3A5WhY8" },
    { name: "Patliputra Blood Bank", address: "Ashok Rajpath, Bankipur, Patna - 800004 (Opposite PMCH ENT Outdoor)", hours: "Open 24 hours", phone: "7947425598", map: "https://maps.app.goo.gl/8vomH92L7QkXBUMs5" }
  ];

const BloodBankSearch = () => {
  const [query, setQuery] = useState("");
  const [filteredBloodBanks, setFilteredBloodBanks] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      setFilteredBloodBanks([]);
    } else {
      const results = bloodBankData.filter(
        (bank) =>
          bank.name.toLowerCase().includes(value) ||
          bank.address.toLowerCase().includes(value)
      );
      setFilteredBloodBanks(results);
    }
  };

  return (
    <div className={`bloodbank-container ${query ? "borderless" : ""}`}>
      <h1>Connect With Your Blood Bank</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a blood bank..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {filteredBloodBanks.length > 0 && (
        <div className="bloodbank-list">
          {filteredBloodBanks.map((bank, index) => (
            <div className="bloodbank-card" key={index}>
              <h3>{bank.name}</h3>
              <p><strong>Address:</strong> {bank.address}</p>
              <p><strong>Hours:</strong> {bank.hours}</p>
              <p><strong>Phone:</strong> {bank.phone}</p>
              <button
                onClick={() => window.open(bank.map, "_blank")}
                className="map-button"
              >
                View on Google Maps
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BloodBankSearch;
