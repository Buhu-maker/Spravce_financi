package cz.spravceFinanci.spravce_financi.controller;

import cz.spravceFinanci.spravce_financi.dto.TransakceRequestDTO;
import cz.spravceFinanci.spravce_financi.dto.TransakceResponseDTO;
import cz.spravceFinanci.spravce_financi.entity.Transakce;
import cz.spravceFinanci.spravce_financi.mapper.TransakceMapper;
import cz.spravceFinanci.spravce_financi.service.TransakceService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/transakce")
public class TransakceController {

    private final TransakceService transakceService;

    public TransakceController(TransakceService transakceService) {
        this.transakceService = transakceService;
    }


    @GetMapping
    public List<Transakce> zobrazVsechny() {
        return transakceService.najdiVsechny();
    }

    @DeleteMapping("/{id}")
    public void smazTransakci(@PathVariable Long id) {
        transakceService.smazTransakci(id);
    }

    @GetMapping("/prijmy")
    public List<Transakce> zobrazPrijmy() {
        return transakceService.najdiPodleTypu("příjem");
    }

    @GetMapping("/vydaje")
    public List<Transakce> zobrazVydaje() {
        return transakceService.najdiPodleTypu("výdaj");
    }

    @GetMapping("/zustatek")
    public double zobrazZustatek() {
        return transakceService.vypocitejZustatek();
    }
    @DeleteMapping
    public void smazVsechny() {
        transakceService.smazVsechnyTransakce();
    }
    @PostMapping
    public TransakceResponseDTO pridejTransakci(@RequestBody @Valid TransakceRequestDTO request) {
        Transakce transakce = TransakceMapper.toEntity(request);
        Transakce ulozena = transakceService.ulozTransakci(transakce);
        return TransakceMapper.toDTO(ulozena);
    }

}
