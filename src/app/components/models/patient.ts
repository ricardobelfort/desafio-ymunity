export interface Patient {
  id?: number;
  paciente?: string;
  status?: string;
  diagnostico?: string;
  medicamento?: string;
  planoSaude?: string;
  lastUpdate?: string | Date;
}
