import axios from 'axios';

// Define interfaces for the service
interface UserInfo {
  age?: string;
  gender?: string;
  pastConditions?: string[];
  allergies?: string[];
  medications?: string[];
}

interface MedicalConditionSuggestion {
  name: string;
  description: string;
  probability: string; // "faible", "modéré", "élevé"
}

interface SpecialistRecommendation {
  specialist: {
    type: string;
    title: string;
    description: string;
  };
  reasoning: string;
}

interface UrgencyEvaluation {
  urgencyLevel: "low" | "medium" | "high" | "emergency";
  reasoning: string;
  recommendations: string;
}

interface AIApiResponse {
  text?: string;
  [key: string]: any;
}

// 🛠 New Configuration (calling your own backend route)
const API_CONFIG = {
  endpoint: '/api/ask',  // ← now calls your own server!
};

// Service pour l'intégration avec l'IA
class AIService {
  static async analyzeSymptoms(symptoms: string, userInfo: UserInfo = {}): Promise<any> {
    try {
      const prompt = this.buildSymptomAnalysisPrompt(symptoms, userInfo);
      const response = await this.callAIAPI(prompt);
      return this.parseSymptomAnalysisResponse(response);
    } catch (error) {
      console.error('Erreur lors de l\'analyse des symptômes:', error);
      throw new Error('Impossible d\'analyser les symptômes. Veuillez réessayer.');
    }
  }

  static async recommendSpecialist(conditions: MedicalConditionSuggestion[], userInfo: UserInfo = {}): Promise<SpecialistRecommendation> {
    try {
      const prompt = this.buildSpecialistRecommendationPrompt(conditions, userInfo);
      const response = await this.callAIAPI(prompt);
      return this.parseSpecialistRecommendationResponse(response);
    } catch (error) {
      console.error('Erreur lors de la recommandation de spécialiste:', error);
      throw new Error('Impossible de recommander un spécialiste. Veuillez réessayer.');
    }
  }

  static async evaluateUrgency(symptoms: string, conditions: MedicalConditionSuggestion[] = []): Promise<UrgencyEvaluation> {
    try {
      const prompt = this.buildUrgencyEvaluationPrompt(symptoms, conditions);
      const response = await this.callAIAPI(prompt);
      return this.parseUrgencyEvaluationResponse(response);
    } catch (error) {
      console.error('Erreur lors de l\'évaluation de l\'urgence:', error);
      throw new Error('Impossible d\'évaluer l\'urgence. Veuillez réessayer.');
    }
  }

  static buildSymptomAnalysisPrompt(symptoms: string, userInfo: UserInfo): string {
    const age = userInfo.age || 'non spécifié';
    const gender = userInfo.gender || 'non spécifié';
    const pastConditions = userInfo.pastConditions?.join(', ') || 'aucune';
    const allergies = userInfo.allergies?.join(', ') || 'aucune';
    const medications = userInfo.medications?.join(', ') || 'aucun';
    
    return `
      Tu es un assistant médical IA qui aide à analyser les symptômes et à suggérer des conditions médicales possibles.
      Informations du patient :
      - Âge : ${age}
      - Genre : ${gender}
      - Conditions préexistantes : ${pastConditions}
      - Allergies : ${allergies}
      - Médicaments actuels : ${medications}
      Symptômes décrits :
      "${symptoms}"
      Fournis 2 à 4 conditions possibles au format JSON :
      {
        "conditions": [
          {
            "name": "...",
            "description": "...",
            "probability": "faible|modéré|élevé"
          }
        ]
      }
      IMPORTANT : Seulement le JSON.
    `;
  }

  static buildSpecialistRecommendationPrompt(conditions: MedicalConditionSuggestion[], userInfo: UserInfo): string {
    const conditionsText = conditions.map((c) => `${c.name} (probabilité: ${c.probability})`).join(', ');
    return `
      Tu es un assistant médical IA qui recommande des spécialistes médicaux.
      Conditions médicales détectées : ${conditionsText}
      Fournis la recommandation de spécialiste au format JSON :
      {
        "specialist": {
          "type": "...",
          "title": "...",
          "description": "..."
        },
        "reasoning": "..."
      }
      IMPORTANT : Seulement le JSON.
    `;
  }

  static buildUrgencyEvaluationPrompt(symptoms: string, conditions: MedicalConditionSuggestion[]): string {
    const conditionsText = conditions.map((c) => c.name).join(', ');
    return `
      Tu es un assistant IA pour évaluer l'urgence des symptômes.
      Symptômes décrits : "${symptoms}"
      Conditions suspectées : ${conditionsText}
      Classe l'urgence en "low", "medium", "high" ou "emergency".
      Format :
      {
        "urgencyLevel": "...",
        "reasoning": "...",
        "recommendations": "..."
      }
      IMPORTANT : Seulement le JSON.
    `;
  }

  static async callAIAPI(prompt: string): Promise<AIApiResponse> {
    try {
      const response = await axios.post(API_CONFIG.endpoint, { prompt });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'appel à /api/ask:', error);
      throw error;
    }
  }

  static parseSymptomAnalysisResponse(response: AIApiResponse): any {
    const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
    jsonResponse.disclaimer = "Ces suggestions sont basées sur les symptômes décrits et ne constituent pas un diagnostic médical. Consultez un professionnel de santé.";
    return jsonResponse;
  }

  static parseSpecialistRecommendationResponse(response: AIApiResponse): SpecialistRecommendation {
    const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
    return jsonResponse;
  }

  static parseUrgencyEvaluationResponse(response: AIApiResponse): UrgencyEvaluation {
    const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
    return jsonResponse;
  }
}

export default AIService;
export type { MedicalConditionSuggestion };
