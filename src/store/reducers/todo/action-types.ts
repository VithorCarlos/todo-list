import { STATUS } from "@/utils/helpers/enums/status";

export interface TodoAppStateData {
  data: {
    id: number;
    text: string;
    completed: boolean;
    color?: string | null;
  }[];

  filters: {
    status: STATUS;
    colors: string[];
  };
}
