class WordCloudData
  attr_accessor :words_to_counts

  def initialize(input_string)
    @words_to_counts = {}
    self.populate_words_to_counts(input_string)
  end

  def populate_words_to_counts(input)
    current_word_start_index = 0
    current_word_length = 0

    input_string.each_char.with_index do |char, idx|
      if index == input_string.length - 1
        if self.is_letter(char)
          current_word_length += 1
        end
        if current_word_length > 0
          current_word = input_string.slice(current_word_start_idx, current_word_length)
          self.add_word_to_hash(current_word)
        end
      elsif char == ' '
        if current_word_length > 0
          current_word = input_string.slice(current_word_start_idx, current_word_length)
          self.add_word_to_hash(current_word)
          current_word_length = 0
        end
      elsif char == '.'
        if index < input_string.length - 1 && input_string[index + 1] == '.'
          if current_word_length > 0
            current_word = input_string.slice(current_word_start_index,
              current_word_length)
            self.add_word_to_hash(current_word)
            current_word_length = 0
          end
        end

      elsif self.is_letter(character) || character == '\''
        if current_word_length == 0
          current_word_start_index = index
        end
        current_word_length += 1
      end

      elsif character == '-'
        if index > 0 && self.is_letter(input_string[index - 1]) && \
            self.is_letter(input_string[index + 1])
          if current_word_length == 0
            current_word_start_index = index
          end
          current_word_length += 1
        else
          if current_word_length > 0
            current_word = input_string.slice(current_word_start_index,
              current_word_length)
            self.add_word_to_hash(current_word)
            current_word_length = 0
          end
        end
      end
    end
  end

  def add_word_to_hash(word)
    if @words_to_counts.include?(word)
      @words_to_counts[word] += 1
    elsif @words_to_counts.include?(word.capitalize)
      @words_to_counts[word] = 1
      @words_to_counts[word] += @words_to_counts[word.capitalize]
      @words_to_counts.delete(word.capitalize)
    else
      @words_to_counts[word] = 1
    end
  end

  def is_letter(char)
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.include?(char)
  end
end
