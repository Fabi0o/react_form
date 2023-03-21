import Dishes from "./dishes";

export default interface PostData {
  name: string;
  preparation_time: string;
  type: Dishes;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}
