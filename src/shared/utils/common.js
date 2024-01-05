import {
  AnimalIcon,
  CareerIcon,
  CelebrityIcon,
  DevIcon,
  ExplicitIcon,
  FashionIcon,
  FoodIcon,
  HistoryIcon,
  MoneyIcon,
  MovieIcon,
  MusicIcon,
  PoliticalIcon,
  ReligionIcon,
  ScienceIcon,
  SportIcon,
  TravelIcon,
} from '../../assets/svg'

export const LOCALE_ICON = {
  animal: AnimalIcon,
  movie: MovieIcon,
  career: CareerIcon,
  celebrity: CelebrityIcon,
  dev: DevIcon,
  explicit: ExplicitIcon,
  fashion: FashionIcon,
  food: FoodIcon,
  history: HistoryIcon,
  money: MoneyIcon,
  music: MusicIcon,
  political: PoliticalIcon,
  religion: ReligionIcon,
  science: ScienceIcon,
  sport: SportIcon,
  travel: TravelIcon,
}

export const convertedDateTime = (originalDateTime) => {
  const dateObject = new Date(originalDateTime)
  return dateObject.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}
