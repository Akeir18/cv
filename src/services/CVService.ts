import type { CVData } from "@/types/cv";
import type { Education } from "@/types/education";
import type { Experience } from "@/types/experience";
import type { Skill } from "@/types/skills";

class CVService {
	private dataUrl = '/cv-data.json';

	async getData(): Promise<CVData> {
		try {
			const response = await fetch(this.dataUrl);
			if (!response.ok) {
				throw new Error(
					`Error al cargar el JSON: ${response.statusText}`,
				);
            }
            return await response.json();
		} catch (error) {
			console.error('Error cargando datos del CV:', error);
			throw error;
		}
    }
    
	async getSoftSkills(): Promise<Skill[]> {
        const datos = await this.getData();
        return datos.softSkills;
	}

	async getHardSkills(): Promise<Skill[]> {
		const datos = await this.getData();
		return datos.hardSkills;
	}

	async getExperience(): Promise<Experience[]> {
		const datos = await this.getData();
		return datos.experience;
	}

	async getEducation(): Promise<Education[]> {
		const datos = await this.getData();
		return datos.education;
	}
}

export default new CVService();
