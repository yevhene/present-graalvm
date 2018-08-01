require 'benchmark'
require 'rubykon'
gem_dir = Gem::Specification.find_by_name("rubykon").gem_dir
require "#{gem_dir}/lib/benchmark/avg.rb"

Benchmark.avg do |benchmark|
  game_state_19 = Rubykon::GameState.new Rubykon::Game.new(19)
  mcts = MCTS::MCTS.new

  benchmark.config warmup: 180, time: 180

  benchmark.report "19x19 1_000 iterations" do
    mcts.start game_state_19, 1_000
  end
end

