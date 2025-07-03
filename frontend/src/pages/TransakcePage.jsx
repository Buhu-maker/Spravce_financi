import { useEffect, useState } from 'react';
import { ziskejTransakce, pridejTransakci, smazTransakci } from '../services/transakceService';
import TransakceDisplay from '../components/TransakceDisplay';

const TransakcePage = () => {
  const [transakce, setTransakce] = useState([]);
  const [popis, setPopis] = useState('');
  const [castka, setCastka] = useState('');
  const [typ, setTyp] = useState('VYDAJ');

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
    <TransakceDisplay
      transakce={transakce}
      popis={popis}
      castka={castka}
      typ={typ}
      setPopis={setPopis}
      setCastka={setCastka}
      setTyp={setTyp}
      onOdeslani={handleOdeslani}
      onSmazani={handleSmazani}
      celkovySoucet={celkovySoucet}
    />
  );
};

export default TransakcePage;
