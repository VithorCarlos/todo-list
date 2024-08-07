export interface TodoAppStateData {
  data: {
    id: number;
    text: string;
    completed: boolean;
    color?: string | null;
  }[];

  filters: {
    status: string;
    colors: string[];
  };
}
