import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AmadeusService } from "../../services/amadeus.service";
import { FEATURED_CITIES, CityLocation } from "../../utils/destinations";

@Component({
    selector: 'app-activities',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './activities.component.html',
    styleUrl: 'activities.component.scss'
})
export class ActivitiesComponent implements OnInit{
    private amadeusService = inject(AmadeusService);
    cities = FEATURED_CITIES;
    selectedCity: CityLocation = this.cities[0];
    activities: any[] = [];
    loading = false;

    ngOnInit() {
        this.loadActivities();
    }

    onCityChange(city: CityLocation) {
        this.selectedCity = city;
        this.loadActivities();
    }

    async loadActivities() {
        this.loading = true;
        try {
            const response: any = await this.amadeusService.getActivities(
            this.selectedCity.lat, 
            this.selectedCity.lon
            );
            this.activities = response.data;
        } catch (error) {
            console.error("Error al buscar actividades:", error);
        } finally {
        this.loading = false;
        }
    }
}