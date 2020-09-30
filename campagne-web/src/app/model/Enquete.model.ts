import { Demographie } from '../model/demographie.model';
import { Moughataa } from '../model/moughataa.model';
export class Enquete{

public nb011:Number;
public nb1259:Number;
public popvisee:Number;
public demographie:Demographie;
public moughataa:Moughataa;

/*
constructor(nb011:Number, nb1259:Number, popvisee:Number, demographie:Demographie, moughataa:Moughataa){
    this.nb011 = nb011;
    this.nb1259 = nb1259;
    this.popvisee = popvisee;
    this.demographie = demographie;
    this.moughataa = moughataa; 
}
*/
constructor (){}
setNb011(nb011:Number){
    this.nb011 = nb011;
}

//public demographie:Demographie;
}

