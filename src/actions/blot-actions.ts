import { IQuillAudioEmbed, AudioBlotValue } from "../types/types";

export async function deleteAudioBlot(audioEmbed: IQuillAudioEmbed, data: AudioBlotValue) {
  if (!audioEmbed.options.onDelete) {
    return true;
  }
 
  const res = await audioEmbed.options.onDelete(data, audioEmbed);
  return res;
}