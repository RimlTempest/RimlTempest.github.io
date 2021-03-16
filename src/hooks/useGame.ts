import useSWR from 'swr';

async function fetcher(url: string): Promise<any | null> {
    const response = await fetch(url);
    return response.json();
}

export function useGame () {
  const { data, error } = useSWR('./gameData.json', fetcher);

  return {
    game: data,
    isLoading: !error && !data,
    isError: error
  }
}