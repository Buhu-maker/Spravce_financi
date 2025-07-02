import { useEffect, useState } from 'react';
import { ziskejTransakce, pridejTransakci, smazTransakci } from '../services/transakceService';

const TransakcePage = () => {
  const [transakce, setTransakce] = useState([]);
  const [popis, setPopis] = useState('');
  const [castka, setCastka] = useState('');
  const [typ, setTyp] = useState('VYDAJ'); // výchozí hodnota

  useEffect(() => {
    nactiTransakce();
  }, []);

  const celkovySoucet = transakce.reduce((soucet, t) => {
    return t.typ === "PRIJEM"
      ? soucet + t.castka
      : soucet - t.castka;
  }, 0);

  const nactiTransakce = async () => {
    try {
      const odpoved = await ziskejTransakce();
      setTransakce(odpoved.data);
    } catch (e) {
      console.error("Chyba při načítání transakcí:", e);
    }
  };

  const handleSmazani = async (id) => {
    try {
      await smazTransakci(id);
      nactiTransakce();
    } catch (e) {
      console.error("Chyba při mazání transakce:", e);
    }
  };

  const handleOdeslani = async (e) => {
    e.preventDefault();

    if (!popis || !castka || !typ) {
      alert("Vyplň všechna pole.");
      return;
    }

    const novaTransakce = {
      popis: popis,
      castka: parseFloat(castka),
      typ: typ
    };

    try {
      await pridejTransakci(novaTransakce);
      setPopis('');
      setCastka('');
      setTyp('VYDAJ');
      nactiTransakce();
    } catch (e) {
      console.error("Chyba při přidávání transakce:", e.response?.data || e.message);
    }
  };

  return (
    <div>
      <h2>Seznam transakcí</h2>

      <form onSubmit={handleOdeslani}>
        <input
          type="text"
          placeholder="Popis"
          value={popis}
          onChange={(e) => setPopis(e.target.value)}
        />
        <input
          type="number"
          placeholder="Částka"
          value={castka}
          onChange={(e) => setCastka(e.target.value)}
        />
        <select value={typ} onChange={(e) => setTyp(e.target.value)}>
          <option value="PRIJEM">Příjem</option>
          <option value="VYDAJ">Výdaj</option>
        </select>
        <button type="submit">Přidat</button>
      </form>

      <ul>
        {[...transakce].reverse().map((t) => (
          <li key={t.id}>
            [{t.typ}] {t.popis} – {t.castka} Kč
            <button onClick={() => handleSmazani(t.id)}>Smazat</button>
          </li>
        ))}
      </ul>

      <h3> Celkový zůstatek: {celkovySoucet} Kč</h3>
    </div>
  );
};

export default TransakcePage;
