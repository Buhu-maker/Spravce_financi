package cz.spravceFinanci.spravce_financi.repository;

import cz.spravceFinanci.spravce_financi.entity.Transakce;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransakceRepository extends JpaRepository<Transakce, Long> {

    List<Transakce> findByTyp(String typ);
}