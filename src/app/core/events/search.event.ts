export interface SearchEvent {
  searchTerm: string;
  byFilter: ('name' | 'description');
}
