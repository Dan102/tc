﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using task_manager_api.Dtos;
using task_manager_api.Model;

namespace task_manager_api.Profiles
{
    public class BoardsProfile : Profile
    {

        public BoardsProfile()
        {
            CreateMap<Board, BoardReadDto>();
            CreateMap<Board, BoardPreviewReadDto>().ForMember(d => d.isEmpty, opt => opt.MapFrom(src => src.CardLists.Count == 0));
            CreateMap<Card, CardReadDto>();
            CreateMap<Card, Card>().ForMember(d => d.Id, opt => opt.Ignore());
            CreateMap<CardUpdateDto, Card>().ForMember(d => d.Id, opt => opt.Ignore());
            CreateMap<CardList, CardListReadDto>();
        }
    }
}
