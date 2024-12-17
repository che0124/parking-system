package com.example.parking_system.model;

import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@MappedSuperclass
public abstract class Vehicle {
    @Id
    private String licensePlate;
    
    private VehicleStatus status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date entryTime;


    public Vehicle() {
        this.entryTime = new Date();
    }

    public Vehicle(String licensePlate) {
        this.licensePlate = licensePlate;
        this.entryTime = new Date();
        this.status = VehicleStatus.ENTRYED;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public Date getEntryTime() {
        return entryTime;
    }

    public VehicleStatus getStatus() {
        return status;
    }

    public void setStatus(VehicleStatus status) {
        this.status = status;
    }
}
