package cz.spravceFinanci.spravce_financi.mapper;

import cz.spravceFinanci.spravce_financi.dto.TransakceRequestDTO;
import cz.spravceFinanci.spravce_financi.dto.TransakceResponseDTO;
import cz.spravceFinanci.spravce_financi.entity.Transakce;
import cz.spravceFinanci.spravce_financi.entity.TypTransakce;

public class TransakceMapper {

    public static Transakce toEntity(TransakceRequestDTO dto) {
        Transakce transakce = new Transakce();
        transakce.setCastka(dto.getCastka());
        transakce.setPoznamka(dto.getPoznamka());
        transakce.setTyp(TypTransakce.valueOf(dto.getTyp().toUpperCase()));
        return transakce;
    }

    public static TransakceResponseDTO toDTO(Transakce entity) {
        TransakceResponseDTO dto = new TransakceResponseDTO();
        dto.setId(entity.getId());
        dto.setCastka(entity.getCastka());
        dto.setPoznamka(entity.getPoznamka());
        dto.setTyp(dto.getTyp()); // .name() vrátí např. "PRIJEM"
        return dto;
    }
}
