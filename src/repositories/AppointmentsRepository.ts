import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Datat Transfer Object
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepoitory {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  // retorno da variavel
  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public all(): Appointment {
    return this.appointments;
  }
}

export default AppointmentsRepoitory;
