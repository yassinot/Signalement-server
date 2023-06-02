
import { Injectable } from '@nestjs/common';
import { Signalement } from '../models/signalement';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class SignalementService {
  private readonly signalements: Signalement[] = [];

  getAllSignalements(): Signalement[] {
    return this.signalements;
  }

  getSignalementById(id: number): Signalement {
    return this.signalements.find((p) => p.id === id);
  }

  createSignalement(signalement): Signalement {
    const id  = parseInt(uuidv4().replace(/-/g, ''), 16);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa",signalement)
    const newSignalement = { id, ...signalement };
    console.log(newSignalement)
    this.signalements.push(newSignalement);
    return newSignalement;
  }

  updateSignalement(id: number, data:Signalement): Signalement {
    const signalement = this.getSignalementById(id);
    if (!signalement) {
      throw new Error('Signalements not found');
    }
    const index = this.signalements.findIndex(item => item.id === id);
    if (index !== -1) {
       this.signalements[index] = { id, ...data };
       return  this.signalements[index];}
       return undefined;
   
  }

  deleteSignalements(id: number): void {
    const index = this.signalements.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Signalements not found');
    }
    this.signalements.splice(index, 1);
  }
}
