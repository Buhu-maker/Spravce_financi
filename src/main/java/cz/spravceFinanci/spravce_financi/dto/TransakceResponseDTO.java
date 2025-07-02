package cz.spravceFinanci.spravce_financi.dto;

import cz.spravceFinanci.spravce_financi.entity.TypTransakce;

public class TransakceResponseDTO {

    private Long id;
    private double castka;
    private String popis;
    private TypTransakce typ;


    // Gettery a settery
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TypTransakce getTyp() {
        return typ;
    }

    public void setTyp(TypTransakce typ) {
        this.typ = typ;
    }

    public double getCastka() {
        return castka;
    }

    public void setCastka(double castka) {
        this.castka = castka;
    }

    public String getPopis() {
        return popis;
    }

    public void setPopis(String popis) {
        this.popis = popis;
    }
}
