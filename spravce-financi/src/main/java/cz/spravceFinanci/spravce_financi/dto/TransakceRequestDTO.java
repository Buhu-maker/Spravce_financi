package cz.spravceFinanci.spravce_financi.dto;

import cz.spravceFinanci.spravce_financi.entity.TypTransakce;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;


public class TransakceRequestDTO {

    private String typ;

    @Positive
    private double castka;

    @NotBlank
    private String poznamka;

    // Gettery a settery
    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
    }

    public double getCastka() {
        return castka;
    }

    public void setCastka(double castka) {
        this.castka = castka;
    }

    public String getPoznamka() {
        return poznamka;
    }

    public void setPoznamka(String poznamka) {
        this.poznamka = poznamka;

    }
}
