


import { Controller, Get, Post, Put, Delete, Body, Param,UseGuards } from '@nestjs/common';
import { SignalementService } from './signalement.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Import the JwtAuthGuard
import {Signalement  } from "../models/signalement";

@Controller('signalement')
export class SignalementController {
  constructor(private readonly signalementService: SignalementService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllSignalements() {
    return this.signalementService.getAllSignalements();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getSignalementById(@Param('id') id: number) {
    return this.signalementService.getSignalementById(id);
  }

  @Post()
  createSignalement(@Body() signalement: Signalement) {
    console.log("ffffffffff====",signalement)
    return this.signalementService.createSignalement(signalement);
  }

  @Put(':id')
  updateSignalementt(
    @Param('id') id: number,
    @Body('signalement') signalement: Signalement,
  
  ) {
    return this.signalementService.updateSignalement(id, signalement);
  }

  @Delete(':id')
  deleteSignalement(@Param('id') id: number) {
    return this.signalementService.deleteSignalements(id);
  }
}
