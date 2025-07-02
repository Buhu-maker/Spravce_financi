package cz.spravceFinanci.spravce_financi.entity;

import jakarta.persistence.*;

//třída je model dat a reprezentuje jeden řádek v databázi(tabulce)
@Entity
public class Transakce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double castka;
    private String poznamka;
    @Enumerated(EnumType.STRING)
    private TypTransakce typ;

    //bezparametrický konstruktor
    public Transakce() {
    }

    //konstruktor
    public Transakce(double castka, TypTransakce typ, String poznamka) {
        this.castka = castka;
        this.typ = typ;
        this.poznamka = poznamka;
    }

    public Long getId() {
        return id;
    }

    public double getCastka() {
        return castka;
    }

    public TypTransakce getTyp() {
        return typ;
    }

    public String getPoznamka() {
        return poznamka;
    }

    public void setCastka(double castka) {
        this.castka = castka;
    }

    public void setTyp(TypTransakce typ) {
        this.typ = typ;
    }

    public void setPoznamka(String poznamka) {
        this.poznamka = poznamka;
    }



}


