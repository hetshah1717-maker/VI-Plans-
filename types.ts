export enum Category {
  PSYCHOLOGY = 'Psychology',
  DIGITAL = 'Digital Channels',
  TRADITIONAL = 'Traditional Channels',
  GUERRILLA = 'Guerrilla Tactics',
  SEGMENTS = 'Segment Plays'
}

export interface Tactic {
  id: string;
  title: string;
  category: Category;
  description: string;
  actionPoints: string[];
  icon: string;
}

export interface ScriptScenario {
  id: string;
  title: string;
  customerSay: string;
  yourRebuttal: string;
  technique: string;
}

export interface SprintDay {
  day: string;
  title: string;
  tasks: string[];
}
