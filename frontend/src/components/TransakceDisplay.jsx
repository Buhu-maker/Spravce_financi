import React from "react";

export default function TransakceDisplay({ 
  transakce, 
  popis, 
  castka, 
  typ, 
  setPopis, 
  setCastka, 
  setTyp, 
  onOdeslani, 
  onSmazani,
  celkovySoucet
}) {
  return (
    <div className="space-y-8">

      {/* Zůstatek */}
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-500">Aktuální zůstatek</p>
        <p className="text-4xl font-bold text-gray-800">{celkovySoucet} Kč</p>
      </div>

      {/* Formulář */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Přidat transakci</h3>
        <form onSubmit={onOdeslani} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Popis"
              value={popis}
              onChange={(e) => setPopis(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Částka"
              value={castka}
              onChange={(e) => setCastka(e.target.value)}
              className="w-40 p-2 border rounded"
            />
            <select
              value={typ}
              onChange={(e) => setTyp(e.target.value)}
              className="w-40 p-2 border rounded"
            >
              <option value="PRIJEM">Příjem</option>
              <option value="VYDAJ">Výdaj</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Přidat
            </button>
          </div>
        </form>
      </div>

      {/* Tabulka transakcí */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Seznam transakcí</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="pb-2">Typ</th>
              <th className="pb-2">Popis</th>
              <th className="pb-2">Částka</th>
              <th className="pb-2">Akce</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {[...transakce].reverse().map((t) => (
              <tr key={t.id} className="border-t">
                <td className="py-2">[{t.typ}]</td>
                <td>{t.popis}</td>
                <td className={t.typ === "PRIJEM" ? "text-green-600" : "text-red-600"}>{t.castka} Kč</td>
                <td>
                  <button
                    onClick={() => onSmazani(t.id)}
                    className="text-red-500 hover:underline"
                  >
                    Smazat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}