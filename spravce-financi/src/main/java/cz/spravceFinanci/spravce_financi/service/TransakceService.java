package cz.spravceFinanci.spravce_financi.service;

import cz.spravceFinanci.spravce_financi.entity.Transakce;
import cz.spravceFinanci.spravce_financi.entity.TypTransakce;
import cz.spravceFinanci.spravce_financi.repository.TransakceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransakceService {

    private final TransakceRepository transakceRepository;

    public TransakceService(TransakceRepository transakceRepository) {
        this.transakceRepository = transakceRepository;
    }

    public Transakce ulozTransakci(Transakce transakce) {
        return transakceRepository.save(transakce);
    }

    public List<Transakce> najdiVsechny() {
        return transakceRepository.findAll();
    }

    public void smazTransakci(Long id) {
        transakceRepository.deleteById(id);
    }

    public List<Transakce> najdiPodleTypu(String typ) {
        return transakceRepository.findByTyp(typ);
    }

    public double vypocitejZustatek() {
        List<Transakce> vsechny = transakceRepository.findAll();
        return vsechny.stream()
                .mapToDouble(t -> {
                    if (t.getTyp() == TypTransakce.VYDAJ) {
                        return -t.getCastka();
                    } else {
                        return t.getCastka();
                    }
                })
                .sum();
    }

    public void smazVsechnyTransakce() {
        transakceRepository.deleteAll();
    }
}
