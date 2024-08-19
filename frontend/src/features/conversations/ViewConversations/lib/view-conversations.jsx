import useFetch from "../../../../hooks/useFetch/useFetch";

const useGetConversations = () => {
  const { data, loading, error } = useFetch("/conversations", {});
  return { data, loading, error };
};

export { useGetConversations };
